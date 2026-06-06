const mongoose = require('mongoose');

const empSchmea = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true,
        min:10000,
        max:25000
    },
    dept:{
        type:String,
        required:true,
        enum:["hr","acct"]
    },
    address:{
        type:String,
        default:"xyz",
        required:true
    }
},{timestamps:true})

const empModel = mongoose.model("emp",empSchmea)

module.exports = empModel