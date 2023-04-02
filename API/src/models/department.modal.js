const { model, Schema } = require('mongoose')
const section = new Schema({ 
    secID:{
        type:String,
        required: true,
        unique:true,
        sparse:true
    },
    secName:{
        type:String,
        required: true,
    },
    function:{
        type:String,
        required: true
    },
    activeAuthority:{
        L1:String,
        L2:String,
        L3:String,
        L4:String
    },
    authorities:[String],
    complaints:[String],
    rating:Number,
    resolvedComplaint:{
        type:Number,
    },
    pendingComplaint:{
        type:Number,
    }
})
const department= new Schema({
    departID:{
        type:String,
        required: true
    },
    departName:{
        type:String,
        required: true
    },
    departDescription:{
        type:String,
        required:true
    },
    section:[section],
    rating:Number,


})
const Department=model("Department", department)
const Section=model("Section",section)
module.exports= {
Department, Section
}