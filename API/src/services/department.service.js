require("mongoose")
const { Department, Section } = require("../models/department.modal")

// GET Requests ------>>>>>>>>
// const get_sections  = async (query) =>{
//     if(query.hasOwnProperty("skip")||query.hasOwnProperty("limit")){
//         var limit=options.limit || 10, skip=options.skip || 0
//         return Department.find(query.filters,query.projection).skip(parseInt(skip)).limit(parseInt(limit))
//     }
//     return Department.find(query.filter,query.projection)
// }
const get_section = async (query) => {
    if (query.id) {
        return Department.findOne({ "id": query.id }, query.projection)
    }
    return null
}
const get_divisions = async (query) => {
    if (query.hasOwnProperty("skip") || query.hasOwnProperty("limit")) {
        var limit = options.limit || 10, skip = options.skip || 0
        return Department.find(query.filters, query.projection).skip(parseInt(skip)).limit(parseInt(limit))
    }
    return Department.find(query.filter, query.projection)
}
const get_department = async (query) => {
    if (query.id) {
        return Department.findOne({ "id": query.id }, query.projection)
    }
    return null
}


// POST Requests ------>>>>>>>>>
const add_department = async (depart) => {
    const department = new Department(depart)
    department.save()
    return { success: true, message: "Successfuly added" }
}



// PUT or UPDATE Requests ------->>>>>>>
const add_section = async (sec, departID) => {
    const section = new Section(sec)
    Department.updateOne(
        { departID: departID, 'section.secID': { $ne: sec.secID } }, // $ne : It checks whether a subdocument with the same subdocField value already exists in the parent's subdocuments array
        { $addToSet: { section: section } }   // The $addToSet operator adds a value to an array only if it does not already exist in the array
    )
    .then((res)=>{
        if(res.modifiedCount) return {success:false, message:"Operation Unsuccessful"}
        return {success:true,message:"Operation Successful"}
    }
        )
    .catch((err)=>{return {success:false,message:"Service Error"}})
}



module.exports = {
    get_section,
    get_department,
    get_divisions,
    add_department,
    add_section
}