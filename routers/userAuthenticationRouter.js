import express from 'express'
import userModel from '../modals/Usermodal.js'
let usersRouter=express.Router()
usersRouter.route('/').get((req,res)=>{
    res.status(200).json({data:"get user called"})
})
usersRouter.route('/createUser').post(async (req,res)=>{
    // let user=new userModel()
    try{
        // this is method 1 creation of document in mongo db using creation method on modal
        let user= await userModel.create(req.body)
        console.log(user)
        return res.status(200).json({staus:"success",message:"user created succesfully",data:user})
        
        // // This is methos 2
        // let user=new userModel(req.body)
        // await user.save().then((data)=>{
        //     return res.status(200).json({staus:"success",message:"user created succesfully",data:data})

        // })

    }
    catch(err){
        console.log(err)
       return  res.status(400).json({status:"error",message:err?.message || err})
    }
})

usersRouter.route('/getAllUsers').get(async (req,res)=>{
    try{
        let users=await userModel.find()
        res.status(200).json({status:"succes",message:"Data retrved successfully",data:users})
    }
    catch(err){
        res.status(400).json({status:"error",message:err?.message || err})
    }
})

export default usersRouter