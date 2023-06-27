const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    "username":{type:String,unique:true,required: true},
    "email":String,
    "mobile":Number,
    "Password":String


})

const Usermodel=mongoose.model("users",userSchema)

module.exports={Usermodel}