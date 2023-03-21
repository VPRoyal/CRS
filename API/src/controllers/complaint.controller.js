require('mongoose')
// const auth = require("../middlewares/AuthJWT.mid")
const {add_complain} = require("../services/complaint.service")

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