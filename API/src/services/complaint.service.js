require("mongoose")
const Complain=require("../models/complaint.modal")

// GET Requests ------>>>>>>>>
const get_complains = async (query)=>{
    if(query.hasOwnProperty("skip")||query.hasOwnProperty("limit")){
        var limit=query.limit || 10, skip=query.skip || 0
        return Complain.find(query.filter,query.projection,{skip:skip,limit:limit})
    }
    else
        return Complain.find(query.filter,query.projection)
}
const get_complain = async (query)=>{
    if(query.id){
        return Complain.findOne({"id":query.id},query.projection)
    }
    return null
}


// POST Requests ------>>>>>>>>>
const add_complain =async (query)=>{
    const complain = new Complain(query)
    return complain.save()
}


// PUT or UPDATE Requests ------->>>>>>>
const update_complain=async(data)=>{
    let doc = await Complain.findOneAndUpdate(data.filter, data.update);
    return doc
}

module.exports={
    get_complains,
    get_complain,
    add_complain,
    update_complain
}