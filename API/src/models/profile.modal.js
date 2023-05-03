const { model, Schema }=require('mongoose')
const section =new Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    level:{
        type:Number,
        required:true
    },
    overallRatingValue:Number,
    ratings:[{
        value:Number,
        comment:String
    }],
    assignedDate:{
        type:Date,
        default:new Date()
    },
    unassignedDate:{
        type:Date,
    }
})
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
    sections:[section]
    ,
    activeSections:[section],
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