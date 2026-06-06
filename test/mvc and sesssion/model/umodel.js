const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
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

const userModel = mongoose.model("users",userSchema)

module.exports = userModel