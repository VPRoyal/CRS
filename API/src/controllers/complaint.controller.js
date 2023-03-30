require('mongoose')
// const auth = require("../middlewares/AuthJWT.mid")
const {add_complain, get_complains} = require("../services/complaint.service")
exports.get_complainsID= async (req, res)=>{
    const filter="", projection="id"
    try {
        const complains =await get_complains({filter, projection, skip:req.body.page*req.body.limit, limit:req.body.limit})
    } catch (err) {
        
    }
}
exports.register = async (req, res) => {
    // Some more fields need to be added and validated.
    const data={
        id:"0034",
        studentId:"2019UMT1500",
        title:req.body.title,
        type:req.body.type,
        activeSection:req.body.section,
        section:req.body.section,
        description:req.body.desc,
        attachment:req.body.file,
        activeOfficer:"ID of active officer",
    }
    try {
        const register = await add_complain(data)
        console.log(register)
    } catch (err) {
        console.log("Error: "+err)
    }
}