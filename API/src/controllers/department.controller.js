require('mongoose')
// const auth = require("../middlewares/AuthJWT.mid")
const { add_department, add_section, get_divisions } = require("../services/department.service")

exports.add_department = async (req, res) => {
    // Some more fields need to be added and validated.
    try {
        const Department = await add_department(req.body.department)
        res.json({err:false, message:"Success"})

    } catch (err) {
        res.json({err:true,Error:err})
    }
}
exports.add_section= async (req, res) => {
    // Some more fields need to be added and validated.
    try {
            const Section = await add_section(req.body.section,req.body.departID)
            res.json(Section)
    } catch (err) {
        res.json({success:false,message:"Internal Server Error"})
    }
}

exports.get_division=async (req,res)=>{
    const filter=null, projection="departID departName section.secID section.secName"
    try {
        const sections =await get_divisions({filter,projection})
        res.json(sections)
    } catch (err) {
        res.json({err:true,Error:err})

    }
}