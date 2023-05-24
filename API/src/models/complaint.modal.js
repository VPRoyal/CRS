const { model, Schema }=require('mongoose')
const Thread =new Schema({
        id:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true
        },
        userId:{
          type:String,
          required:true  
        },
        message:{
            type:String,
            required:true
        },
        attachment: {
            data: Buffer,
            contentType: String
          },
        createdAt:Date
})
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
    upvotes:{
        total:Number,
        details:[{ id:String, name:String}]
    },
    thread:[Thread]
})
complaint.pre('save', function(next) {
    // Calculate the length of 'arrayField'
    this.upvotes.total = this.upvotes.details.length;
    next();
  });
module.exports= model("Complaint", complaint)