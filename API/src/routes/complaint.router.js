const express=require('express')
const complainControl=require("../controllers/complaint.controller")
const complainRouter=express.Router();


// ROUTE on '/complain/
complainRouter.route("/")
.get(complainControl.get_complainsID)

complainRouter.route("/:id")
.get(complainControl.getComplainByID)

complainRouter.route("/thread/:id")
.get(complainControl.getThreadByID)

// ROUTE on '/complain/register' ------------->>>>>>>>>>
complainRouter.route("/register/")
.post(complainControl.register)




module.exports=complainRouter;