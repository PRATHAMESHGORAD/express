const mongoose = require('mongoose');

const empSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true,
        min:1000,
        max:1000000

    },
    dept:{
        type:String,
        required:true,
        enum:["hr","acct","dev","sales"]
    }
},{timestamps:true}
)

const empModel= mongoose.model("emp",empSchema)
module.exports = empModel