require('mongoose')
// const auth = require("../middlewares/AuthJWT.mid")
const { get_profiles, add_profile, update_profile, get_profile, auth_profile, count_profile, update_profiles } = require("../services/profile.service")

// 
exports.get_users = async (req, res) => {
    try {
        const { role = ['student', 'staff', 'faculty'], inactive = false, search = "", page = 1 } = req.query
        const filter = {
            active: inactive === "true" ? false : { $in: [true, false] },
            role: { $in: role },
            $or: [
                { id: { $regex: `^${search}`, $options: "i" } },
                { name: { $regex: `^${search}`, $options: "i" } },
            ],
            // registration:true
        }
        const projection = "id name post role contact active"
        const Profile = await get_profiles({ filter, projection, page })
        const CountProfile = await count_profile({ filter })
        res.json({ profile: Profile, maxPage: Math.ceil(CountProfile / 10) })

    } catch (err) {
        // res.status(500).send("Internal Server Error", err)
        console.log("Internal Server", err)
        res.status(500).send(err)
    }
}
exports.get_userById = async (req, res) => {
    try {
        const filter = { id: req.params.id }
        const projection = "id name post role contact active activeSections department"
        const Profile = await get_profile({ filter, projection })
        res.json(Profile)
    }
    catch(err) {
        res.json({ message: "Invalid Request", success: "false", err:err})
    }
}
exports.login = async (req, res) => {
    // Email should be validate here. Also parameters should be validate and filtered for any mongodb injection.

    const remember = req.body.remember
    try {
        const login = await auth_profile({ "id": req.body.id, "password": req.body.pass })
        res.json(login)
    }
    catch (err) {
        console.log("Error: " + err)
    }
}

// POST request handle
exports.create_user = async (req, res) => {
    try {
        await add_profile(req.body)
        res.send("Success")
    } catch (err) {
        res.send("Error: " + err)
    }
}
exports.register = async (req, res) => {
    // Email should be validate here. Also parameters should be validate and filtered for any mongodb injection.
    try {
        const register = await add_profile(req.body)
        res.json({ "profile": register, "registered": true, "message": "Successfuly registered" })
    } catch (err) {
        console.log("Error: " + err)
    }
}

// PUT reqest handle
exports.change_pass = async (req, res) => {
    const filter = { "id": req.body.id }
    const update = { "password": req.body.pass }
    try {
        await update_profile({ filter, update })
        res.send("Success")
    }
    catch (err) {
        res.send("Error: " + err)
    }
}
exports.updateProfile= async(req,res)=>{
    //****** */ We also have to work upon error handling
    const {id, updateProfile, department, addSection, closeSection}=req.body
    var filter={id:id}, projection, update
    // ******* We also have to check for profile deactivation, so that no action can be performed, if profile deactivated.


    // Profile Update
    if(Object.keys(updateProfile).length){
        // **** Have to validate profile parameters. Parameters are not categorised, hence can be insecure.
        update=updateProfile
       await update_profile({filter, update})
    }

    // Department Change ---->>>>>>
    if(department){
        // Have to check if such a department exist or not...
        // Check for sections exist...   
        projection='activeSections'
        const activeSection = await get_profile({ filter, projection})
        if(activeSection) res.json({ message: "Close all sections", success: "false", err:"Logical error"})
        update={"department":department}
        const department= await update_profile({filter, update})
    }

    // Close Sections ----->>>>>
    if(closeSection.length){
        filter={id:id,'sections.id':{$in:closeSection}}
        update={ 
        $set: { 'sections.$[elem].unassignedDate': new Date() }
    }
        var optional={ arrayFilters: [{ 'elem.id': { $in: closeSection } }] }
        const ProfileUpdate= await update_profile({filter, update, optional})

        filter={ id: id }
        update={ $pull: { activeSections: { id: { $in: closeSection } } } }
        const ProfileRemoved=await update_profile({filter, update})
    }

    // New Sections ----->>>>>
    if(addSection.length){
        filter={id:id},
        update={ $push: { activeSections: { $each: addSection }, sections: { $each: addSection } } }
        var optional={new:true}
        const UpdatedProfile= await update_profile({filter, update, optional})
    }
    res.json({message:"Successfuly Updated", success:"true"})
}