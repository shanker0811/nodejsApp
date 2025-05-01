import mongoose from "mongoose";
const usersSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        unique:[true,"name cant be dublicated"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
        select:false

    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email cant be dublicated"]
    },
    phoneNumber:{
        type:String,
        required:[true,"phone Number is required"],
        minLength:[10,"should be  minimum 10 charaters"],
        unique:[true,"phone Number cant be dublicated"]
    },
    country:{
        type:String,
        
    },
    state:{
        type:String,

    },
    city:{
        type:String,

    }

})
const userModel=mongoose.model('users',usersSchema)
export default userModel