const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    pprice:{
        type:Number,
        min:200,
        max:1000,
        required:true
    },
    category:{
        type:String,
        enum:["electronic","clothes"],
        required:true
    }
},{timestamps:true})

const productModel = mongoose.model("product",productSchema)

module.exports = productModel