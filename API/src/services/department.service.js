require("mongoose")
const {Department, Section}=require("../models/department.modal")

// GET Requests ------>>>>>>>>
const get_sections  = async (query) =>{
    if(query.hasOwnProperty("skip")||query.hasOwnProperty("limit")){
        var limit=options.limit || 10, skip=options.skip || 0
        return Department.find(query.filters,query.projection).skip(parseInt(skip)).limit(parseInt(limit))
    }
    return Department.find(query.filters,query.projections)
}
const get_section = async (query)=>{
    if(query.id){
        return Department.findOne({"id":query.id},query.projection)
    }
    return null
}
const get_departments  = async (query) =>{
    if(query.hasOwnProperty("skip")||query.hasOwnProperty("limit")){
        var limit=options.limit || 10, skip=options.skip || 0
        return Department.find(query.filters,query.projection).skip(parseInt(skip)).limit(parseInt(limit))
    }
    return Department.find(query.filters,query.projections)
}
const get_department = async (query)=>{
    if(query.id){
        return Department.findOne({"id":query.id},query.projection)
    }
    return null
}


// POST Requests ------>>>>>>>>>
const add_department =async (depart)=>{
    const department = new Department(depart)
    return department.save()
}



// PUT or UPDATE Requests ------->>>>>>>
const add_section= async (sec,departID)=>{
    const department= await Department.findOne(departID)
            if(department){
                const section =new Section(sec)
                department.section.push(section)
                return department.save()
            }
            else return {err:true,message:"User not found"}
        
}



module.exports={
    get_sections,
    get_section,
    get_department,
    get_departments,
    add_department,
    add_section
}