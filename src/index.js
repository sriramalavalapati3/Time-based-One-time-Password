const express=require("express");
const app=express();
const {connection}=require("../config/config")
app.use(express.json());



app.listen(8080,async(req,res)=>{
try {
    await connection
    console.log("server running at port number :8080");

} catch (error) {
    console.log(error.message)
}
})