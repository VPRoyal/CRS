import { model, Schema } from "mongoose"

const section= new Schema({
    _id:{
        type:String,
        unique:true,
        index:true
    }
})
export default model("Section", section)