const express=require('express')
const profileControl=require("../controllers/profile.controller")
const profileRouter=express.Router();

// profileRouter.use(express.urlencoded({extended:"true"}))
// profileRouter.use(express.json())


// ROUTE on '/profile/' ------------->>>>>>>>>>
profileRouter.route("/")
.get(profileControl.get_users)

profileRouter.route("/:id")
.get(profileControl.get_user)

// ROUTE on '/profile/account/' ------------->>>>>>>>>>
profileRouter.route("/account/")
.get(profileControl.login)
.post(profileControl.register)

profileRouter.route("/password")
.put(profileControl.change_pass)

module.exports=profileRouter;