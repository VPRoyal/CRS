require("mongoose")
const Complain=require("../models/complaint.modal")

// GET Requests ------>>>>>>>>
const get_complains = async (query)=>{
    if(query.hasOwnProperty("skip")||query.hasOwnProperty("limit")){
        var limit=options.limit || 10, skip=options.skip || 0
        return Complain.find(query.filters,query.projection).skip(parseInt(skip)).limit(parseInt(limit))
    }
    return Complain.find(query.filters,query.projections)
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
    console.log(doc)
}

module.exports={
    get_complains,
    get_complain,
    add_complain,
    update_complain
}