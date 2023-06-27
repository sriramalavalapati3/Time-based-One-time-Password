const express=require("express");

const credroute=express.Router();
const bcrypt = require('bcrypt');
const {Usermodel}=require("../models/user.model")



//===============================>Register route


credroute.post("/register",async(req,res)=>{
    try {
      let {email,username,Password,mobile}=req.body  ;
      bcrypt.hash(Password,5, async(err, hash)=>{
      if(!err)
      {
        let data=new Usermodel({email,username,Password:hash,mobile})
        await data.save();
        res.status(200),send({"msg":"registered sucessfully"})
      }else{
        res.send({"msg":"error in hasing password"})
      }
    });

    } catch (error) {
        res.status(404).send({"error":error.message})
    }
})


//======================================================>Login Route


credroute.post("/login",async(req,res)=>{
  try {
    
  } catch (error) {
    
  }
})