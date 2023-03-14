require('mongoose')
// const auth = require("../middlewares/AuthJWT.mid")
const {
} = require("../services/profile.service")





// exports.profile_get = async (req, res) => {
    
//         try {
//             const Profile = await get_profile({ id: verify.id })
//             res.json(Profile)
//         }
//         catch (err) {
//             // res.status(500).send("Internal Server Error")
//             res.status(500).send(err)
//         }
// }
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
// exports.create = async (req, res) => {
//     try {
//         await create_profile(req.body.data)
//         res.send("Success")
//     } catch (err) {
//         res.send("Error: " + err)
//     }
// }