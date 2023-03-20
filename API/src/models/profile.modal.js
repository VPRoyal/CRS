const { model, Schema }=require('mongoose')

const profile= new Schema({
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
        reportingOfficers:[{
            id:String,
            name:String,
            assignedDate:Date,
            unassignedDate:Date
        }],
        overallRatingValue:Number,
        ratings:[{
            value:Number,
            comment:String
        }],
        assignedDate:Date,
        unassignedDate:Date
    }]
    ,
    activeSections:[{
        id:String,
        level:Number,
        reportingOfficers:[{
            id:String,
            name:String,
            assignedDate:Date,
            unassignedDate:Date
        }],
        activereportingOfficers:{
            id:String,
            name:String,
            assignedDate:Date,
        },
        ratingValue:Number,
        totalRated:Number,
        assignedDate:Date
    }],
    ratings:{
        ratingValue:Number,
        totalRated:Number
    },
    active:{
        type:Boolean,
        default:false
    },
    activeComplains:[String],
    resolvedComplains:[String],
    terms:{
    type:Boolean
    }

})
module.exports= model("Profile", profile)