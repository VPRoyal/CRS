const express=require('express')
const complainControl=require("../controllers/complaint.controller")
const complainRouter=express.Router();


// ROUTE on '/complain/
complainRouter.route("/")
.get(complainControl.get_complainsID)


// ROUTE on '/complain/register' ------------->>>>>>>>>>
complainRouter.route("/register/")
.post(complainControl.register)




module.exports=complainRouter;