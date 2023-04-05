const { model, Schema }=require('mongoose')

const complaint= new Schema({
    id:{
        type:String,
        required: true,
        unique:true,
        index:true
    },
    public:{
        type:Boolean,
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
    section:[String],
    activeOfficer:{
        type:String,
        required: true,
    },
    officer:[String],
    level:{
        type:Number,
        default:1
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
module.exports= model("Complaint", complaint)