const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    salary:{
        type:Number,
        unique:true,
        required:true
    },
    dept:{
        type:String,
        enum:["hr","acct","it"],
        required:true
    }
},{timestamps:true})

const empModel = mongoose.model("emp",empSchema)

module.exports = empModel