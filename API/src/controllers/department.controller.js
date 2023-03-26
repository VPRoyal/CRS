require('mongoose')
// const auth = require("../middlewares/AuthJWT.mid")
const { add_department, add_section } = require("../services/department.service")

exports.add_field = async (req, res) => {
    // Some more fields need to be added and validated.
    try {
        if (req.body.field === "department") {
            const Department = await add_department(req.body.department)
            const Section = await add_section(req.body.section, req.body.department.departmentID)
        }
        else if (req.body.field === "section") {
            const Section = await add_section(req.body.section, req.body.department.departmentID)
        }
    } catch (err) {
        console.log("Error: " + err)
    }
}