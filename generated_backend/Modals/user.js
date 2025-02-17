const mongoose=require("mongoose")
const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    zip:{
        type:Number,
        required:true
    }

})

const User = mongoose.model("userSignup",newSchema)

module.exports=User
