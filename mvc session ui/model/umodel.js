const mongoose = require('mongoose');



const userSchmea = mongoose.Schema({
    uname:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})


const userModel = mongoose.model("user",userSchmea)


module.exports = userModel