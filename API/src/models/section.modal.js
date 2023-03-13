import { model, Schema } from "mongoose"

const section= new Schema({
    _id:{
        type:String,
        unique:true,
        index:true
    },
    secID:{
        type:String,
        required: true,
        unique:true,
        index:true
    },
    secName:{
        type:String,
        required: true,
    },
    departmentID:{
        type:String,
        required: true
    },
    departmentName:{
        type:String,
        required: true
    },
    functions:{
        type:String,
        required: true
    },
    authority:{
        L1:String,
        L2:String,
        L3:String,
        L4:String
    },
    totalComplaint:{
        type:Number,
    },
    resolvedComplaint:{
        type:Number,
    },
    pendingComplaint:{
        type:Number,
    }

})
export default model("Section", section)