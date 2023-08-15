require('mongoose')
// const auth = require("../middlewares/AuthJWT.mid")
const { add_complain, get_complains, get_complain, update_complain } = require("../services/complaint.service")
const {get_profile}=require("../services/profile.service")
// ----->>>>>>> Get Requests
exports.get_complainsID = async (req, res) => {
    const filter = null, projection = "id"
    try {
        const complains = await get_complains({ filter, projection, skip: parseInt((req.query.page - 1) * req.query.limit), limit: parseInt(req.query.limit) })
        res.json(complains)
    } catch (err) {
        res.json({ err: true, Error: err })
    }
}
exports.getComplainByID = async (req, res) => {
    const id = req.params.id
    const projection = {
        "section": 0,
        "studentId": 0,
        "upvotes.details": 0,
        "thread": 0
    }
    try {
        const complain = await get_complain({ id: id, projection: projection })
        res.json(complain)
    } catch (err) {
        res.json({ err: true, Error: err })
    }
}
exports.getThreadByID = async (req, res) => {
    const id = req.params.id
    const projection = "thread"
    try {
        const complain = await get_complain({ id: id, projection: projection })
        res.json(complain)
    } catch (err) {
        res.json({ err: true, Error: err })
    }
}

//------>>>>>>> Post requests
exports.register = async (req, res) => {
    // Some more fields need to be added and validated.
    const data = {
        id: req.body.secID + Math.floor(Date.now() / 1000),
        studentId: "2019UMT1500",
        public: req.body.public,
        title: req.body.title,
        type: req.body.type,
        activeSection: req.body.secID,
        section: req.body.secID,
        description: req.body.desc,
        attachment: req.body.file,
        activeOfficer: "ADM0012",
        thread: {
            id: "TH" + Math.floor(Date.now() / 1000),
            type: "system",
            userId: "system",
            message: "New Complain is registered by a Student."
        }
    }
    try {
        const register = await add_complain(data)
        res.send({ success: true, message: "Successfuly registered." })
    } catch (err) {
        console.log("Error: " + err)
        res.send({ success: false, err: err, message: "Internal Server error" })
    }
}


exports.action = async (req, res) => {
    const { action, data } = req.body
    var filter, update
    try {
        switch (action) {
            case "upvote":{
                const userName= await get_profile({filter:{id:"2019UMT1500"},projection:"name"})
                filter={id:data.id}
                update={ $push: { 'upvote.details': { $each: {userId:"2019UMT1500",userName:userName } }} }
                const upvote=await update_complain({filter:filter,update:update})
                res.send({success:true, message:"successfuly upvoted"})
            }
            case "reply":{
                filter={id:data.id}
                update={ $push: { 'thread': { $each: data.thread }} }
                const reply=await update_complain({filter:filter,update:update})
                res.send({success:true, message:"successfuly replied"})
            }
            case "levelup":{
                const userName= await get_profile({filter:{id:"2019UMT1500"},projection:"name"})
                filter={id:data.id}
                update={ $inc: { level: 1 } }
                const levelup=await update_complain({filter:filter,update:update})
                res.send({success:true, message:"succesfully completed"})
            }
            default:
                break;
        }
    } catch (error) {

    }
}