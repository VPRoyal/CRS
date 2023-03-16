require('mongoose')
// const auth = require("../middlewares/AuthJWT.mid")
const {get_profiles, add_profile, update_profile, get_profile} = require("../services/profile.service")


exports.get_users = async (req, res) => {
    
        try {
            const Profile = await get_profiles({ id: verify.id })
            res.json(Profile)
        }
        catch (err) {
            // res.status(500).send("Internal Server Error")
            res.status(500).send(err)
        }
}
exports.get_user =async(req,res)=>{
    try{
        const Profile = await get_profiles({ id: req.params.id })
    }
    catch{

    }
}
// exports.login = async (req, res) => {
//     // Email should be validate here. Also parameters should be validate and filtered for any mongodb injection.
//     // 
//     try {
//         const login = await login_profile(req.query)
//         if (login.auth) {
//             var data = {
//                 id: login.id,
//                 email: login.email
//             }
//             const token = auth.tokenize(data)
//             res.header('auth-token', token).json({ data, message: login.message, token: token })
//         }
//         else {
//             res.json({auth:false,message:login.message})
//         }
//     } catch (err) {
//         res.send("Error: " + err)
//     }
// }
exports.create_user = async (req, res) => {
    try {
        await add_profile(req.body)
        res.send("Success")
    } catch (err) {
        res.send("Error: " + err)
    }
}

exports.change_pass =async (req,res)=>{
    const filter= {"id":req.body.id}
    const update={"password":req.body.pass}
    try{
        await update_profile({filter, update})
        res.send("Success")
    }
    catch (err) {
        res.send("Error: " + err)
    }
}