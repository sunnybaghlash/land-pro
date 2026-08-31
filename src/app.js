const express=require("express")
const cors=require("cors");
const authRoute=require("./routes/authRoute")
require("dotenv").config();
const app=express();
app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoute)
app.get("/",(req,res)=>{
    res.status(200).json({message:"hello"})
    console.log("Hello World")
})
module.exports=app;