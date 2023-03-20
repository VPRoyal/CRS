const express=require('express')
const profileControl=require("../controllers/profile.controller")
const profileRouter=express.Router();

// profileRouter.use(express.urlencoded({extended:"true"}))
// profileRouter.use(express.json())


// ROUTE on '/profile/' ------------->>>>>>>>>>
profileRouter.route("/")
.get(profileControl.get_users)

profileRouter.route("/:id")
.get(profileControl.get_userById)

// ROUTE on '/profile/login/' ------------->>>>>>>>>>
profileRouter.route("/login")
.post(profileControl.login)

profileRouter.route("/register")
.post(profileControl.register)

profileRouter.route("/password")
.put(profileControl.change_pass)

module.exports=profileRouter;