require('mongoose')
// const auth = require("../middlewares/AuthJWT.mid")
const {get_profiles, add_profile, update_profile, get_profile, auth_profile} = require("../services/profile.service")

// 
exports.get_users = async (req, res) => {
try {
    if(req.hasOwnProperty("accountType")){
        var filters={name:{$regex: '^' + req.name, $options: 'i'}},projections
        if(req.accountType==="student")
            projections='id, name, activeComplains, pendingComplains contact'
        else if(req.accountType==="authority")
            projections='id, name, post, accountType, contact, activeSections'
        else
            res.json({message:"Invalid Request", error:"true"})
        const Profile = await get_profiles(filters, projections, req.options)
        res.json(Profile)
    }
    else{
        res.json({message:"Invalid Request", error:"true"})
    }
            
}catch (err) {
// res.status(500).send("Internal Server Error")
res.status(500).send(err)
}
}
exports.get_userById =async(req,res)=>{
    try{
        const Profile = await get_profiles({ id: req.params.id })
        if(req.hasOwnProperty("accountType")){
            var filters={id:req.id,},projections
            if(req.accountType==="student")
                projections='id, name, activeComplains, pendingComplains contact'
            else if(req.accountType==="authority")
                projections='id, name, post, accountType, contact, activeSections'
            else
                res.json({message:"Invalid Request", error:"true"})
            const Profile = await get_profile(filters, projections, req.options)
            res.json(Profile)
        }
        else{
            res.json({message:"Invalid Request", error:"true"})
        }
    }
    catch{

    }
}
exports.login = async (req, res) => {
    // Email should be validate here. Also parameters should be validate and filtered for any mongodb injection.
    
    const remember=req.body.remember
    try{
        const login = await auth_profile({"id":req.body.id,"password":req.body.pass})
        res.json(login)
    }
    catch(err){
        console.log("Error: "+err)
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
        const register= await add_profile(req.body)
        res.json({"profile":register, "registered":true,"message":"Successfuly registered"})
    } catch (err) {
        console.log("Error: "+err)
    }
}

// PUT reqest handle
exports.change_pass =async (req,res)=>{
    const filter= {"id":req.body.id}
    const update={"password":req.body.pass}
    try{
        await update_profile({filter, update})
        res.send("Success")
    }
    catch (err) {
        res.send("Error: " + err)
    }
}