import { model, Schema } from "mongoose"

const complaint= new Schema({
    _id:{
        type:String,
        unique:true,
        index:true
    },
    id:{
        type:String,
        required: true,
        unique:true,
        index:true
    },
    type:{
        type:String,
        required: true,
    },
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    activeSection:{
        type:String,
        required: true,
    },
    activeOfficer:{
        type:String,
        required: true,
    },
    studentId:{
        type:String,
        required:true,
    },
    supportedStudent:[
        {
            id:String,
            name:String
        }
    ],
    thread:[
        {
            id:String,
            type:String,
            userId:String,
            message:String,
            attachement:Blob,
            date:Date
        }
    ]
})
export default model("Complaint", complaint)