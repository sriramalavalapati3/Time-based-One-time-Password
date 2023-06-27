const mongoose=require("mongoose");
const connection=mongoose.connect("mongodb+srv://sriram:sriram@cluster0.sejj4.mongodb.net/2fa?retryWrites=true&w=majority")




module.exports={connection}