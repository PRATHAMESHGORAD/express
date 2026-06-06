const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    salary:{
        type:Number,
        min:10000,
        max:40000,
        requried:true
    },
    dept:{
        type:String,
        enum:["hr","it","sales"],
        required:true
    }
},{timestamps:true})

const empModel = mongoose.model("emp",empSchema)

module.exports = empModel