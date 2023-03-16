require('mongoose') 
const { query } = require('express')
const Profile= require("../models/profile.modal")

// GET Requests -------->>>>>>>>>
const get_profiles= async (query)=>{
    var limit=query.limit || 10, skip=query.skip || 0
    if(query.hasOwnProperty("name")){
        return Profile.find({"name":{$regex: '^' + query.name, $options: 'i'}}, 'id, name, post, accountType, contact, activeSections')
    }
    return Profile.find('id, name, post, accountType, contact, activeSections').skip(parseInt(skip)).limit(parseInt(limit))

}
const get_profile=async (query)=>{
    if(query.id){
        return Profile.findOne({"id":query.id},query.projection)
    }
}
const check_profile =async (query)=>{
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
    check_profile,
    update_profile
}