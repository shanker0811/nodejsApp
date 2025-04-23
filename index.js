import express from 'express'
import dotenv from 'dotenv'
import dbconfig from '../../nodeapp/dbConfig.js'
let app=express()
dotenv.config({path:'./configuration.env'})
// app.use(express.json())
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Server started successfully")
})
app.post("/postData",(req,res)=>{
    console.log(req.body)
    res.status(200).json({data:req.body})
})
app.listen(process.env.LOCALPORT || "8008",(err)=>{if(!err) console.log("Server Connected at the port")})