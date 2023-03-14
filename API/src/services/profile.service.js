require('mongoose') 
const Profile= require("../models/profile.modal")
const get_profiles= async (query)=>{
    var limit=query.limit || 10, skip=query.skip || 0
    if(query.hasOwnProperty("name")){
        return Profile.find({"name":{$regex: '^' + query.name, $options: 'i'}}, 'locality city')
    }
    return Profile.find().skip(parseInt(query.skip)).limit(parseInt(query.limit))

}


// const get_profile = async (q)=>{
//     const user = await Profile.find({_id:q.id},{pass:0,__v:0}).exec();
//     if (user){
//         return user
//     } else {return {message:"Data not found"}}
// }
// const login_profile=async (query)=>{
//         if(query.hasOwnProperty("email")&&query.hasOwnProperty("pass")){
//             var user;
//             user = await Profile.findOne({"email":query.email},'email pass').exec();   // Here second paramter is used for getting selective fields        
//             if(user){
//                 if(query.pass===user.pass) return {email:query.email,id:user._id, auth:true, message:"Success"}
//                 return {message:"Password not correct", auth:false}
//             } else  return {message:"User not exist", auth:false}
//         }
//         else return {message:"Credentials Incorrect", auth:false}
// }
// const create_profile=(data)=>{
//     if(Array.isArray(data)){
//         return Profile.insertMany(data,{ordered:false})
//     }
//     const profile = new Profile(data)
//     return profile.save()
// }

module.exports={
    get_profile,
    login_profile,
    create_profile
}