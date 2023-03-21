require('mongoose') 
const Profile= require("../models/profile.modal")

// GET Requests -------->>>>>>>>>
const get_profiles=async(query)=>{
    if(query.hasOwnProperty("skip")||query.hasOwnProperty("limit")){
        var limit=options.limit || 10, skip=options.skip || 0
        return Profile.find(query.filters,query.projection).skip(parseInt(skip)).limit(parseInt(limit))
    }
    return Profile.find(query.filters,query.projections)
}
const get_profile=async (query)=>{
    if(query.id){
        return Profile.findOne({"id":query.id},query.projection)
    }
    return null
}
const auth_profile =async (query)=>{
    const user= await Profile.findOne({"id":query.id},"id password").exec()
    if(user){
        if(query.pass===user.password) return {message:"Success", auth:true}
        return {message:"Incorrect password",auth:false}
    }
    return {message:"User not exist", auth:false}
}


// POST Requests --------->>>>>>>>>>
const add_profile= async (data)=>{
    const profile = new Profile(data)
    return profile.save()
}

// PUT or UPDATE Requests ------->>>>>>>
const update_profile=async(data)=>{
let doc = await Profile.findOneAndUpdate(data.filter, data.update);
console.log(doc)
}
module.exports={
    get_profiles,
    get_profile,
    add_profile,
    auth_profile,
    update_profile
}