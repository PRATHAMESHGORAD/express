const mongoose = require('mongoose');
const empSchmea = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    salary:{
        type:Number,
        min:10000,
        max:40000,
        required:true
    },
    dept:{
        type:String,
        enum:["hr","it"],
        required:true
    }
},{timestamps:true})

const empModel = mongoose.model("emp",empSchmea)
module.exports = empModel