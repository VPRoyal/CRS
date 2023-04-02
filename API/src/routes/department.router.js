const express=require('express')
const departmentControl=require("../controllers/department.controller")
const departmentRouter=express.Router();



// ROUTE on '/department/' ------------->>>>>>>>>>
departmentRouter.route("/")
.get(departmentControl.get_division)
.post(departmentControl.add_department)

// ROUTE on '/department/section/' ------------->>>>>>>>>>
departmentRouter.route("/section/")
.post(departmentControl.add_section)






module.exports=departmentRouter;