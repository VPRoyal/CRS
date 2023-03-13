import { model, Schema } from "mongoose"

const profile= new Schema({
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
    name:{
        type:String,
        required: true,
    },
    post:{
        type:String,
        required: true,
    },
    accountType:{
        type:String,
        required: true,
    },
    contact:{
        email:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        }
    },
    password:{
        type:String,
    },
    sections:[{
        id:String,
        level:Number,
        reportingOfficer:String,
        ratingValue:Number,
        totalRated:Number,
        active:Boolean,
        assignedDate:Date,
        closedDate:Date
    }]
    ,
    ratings:{
        ratingValue:Number,
        totalRated:Number
    },
    active:{
        type:Boolean,
        default:false
    }

})
export default model("Profile", profile)