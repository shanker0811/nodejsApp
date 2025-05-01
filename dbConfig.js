import dotenv from 'dotenv'
dotenv.config({path:'./configuration.env'})
import mongoose, { connect } from 'mongoose'
// console.log(process.env.DB_CONNCECTION_STRING)

 const dbconfig=(function(){
    try{
        mongoose.connect(process.env.DB_CONNECTION_STRING).then((con)=>{
            console.log("dbconnected succesfully")
        }).catch((err)=>{
            throw err
        })
    }
    catch(err){

    }

})()
export default dbconfig