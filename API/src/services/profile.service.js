const Profile= require("../models/profile.modal")

// GET Requests -------->>>>>>>>>
const get_profiles=async(query)=>{
    const {filter, projection, page=1}=query
    return Profile.find(filter,projection).skip((parseInt(page)-1)*10).limit(10)
}
const get_profile=async ({filter, projection})=>{
        return Profile.findOne(filter,projection)
}
const auth_profile =async (query)=>{
    const user= await Profile.findOne({"id":query.id},"id password").exec()
    if(user){
        if(query.pass===user.password) return {message:"Success", auth:true}
        return {message:"Incorrect password",auth:false}
    }
    return {message:"User not exist", auth:false}
}
const count_profile=async(query)=>{
    const {filter}=query
    return Profile.countDocuments(filter)
}

// POST Requests --------->>>>>>>>>>
const add_profile= async (data)=>{
    const profile = new Profile(data)
    return profile.save()
}

// PUT or UPDATE Requests ------->>>>>>>
const update_profile=async(data)=>{
    const {filter, update, optional={}}=data
    console.log("optional", {filter, update, optional})
let doc = await Profile.findOneAndUpdate(filter, update, optional);
}
const update_profiles=async(data)=>{
    let doc = await Profile.updateMany(data.filter, data.update, data.optional=null);
    }
module.exports={
    get_profiles,
    get_profile,
    add_profile,
    auth_profile,
    update_profile,
    update_profiles,
    count_profile
}