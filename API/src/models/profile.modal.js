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
        default:"NA"
    },
    role:{
        type:String,
        required: true,
    },
    contact:{
        email:{
            type:String,
            default:"NA"
        },
        phone:{
            type:Number,
            default:000
        }
    },
    password:{
        type:String,
    },
    department:{
        type:String,
        default:"NA"
    },  
    sections:[{
        id:String,
        level:Number,
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
        default:true
    },
    registration:{
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