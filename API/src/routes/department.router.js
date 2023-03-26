const express=require('express')
const departmentControl=require("../controllers/department.controller")
const departmentRouter=express.Router();


// ROUTE on '/department/register' ------------->>>>>>>>>>
departmentRouter.route("/")
.post(departmentControl.add_field)




module.exports=departmentRouter;