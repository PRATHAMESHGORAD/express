const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    roomnumber:{
        type:Number,
        unique:true,
        required:true
    },
    roomtype:{
        type:String,
        enum:["luxury","normal"],
        required:true

    },
    pricepernight:{
        type:Number,
        min:1000,
        max:5000,
        required:true
    },
    capacity:{
        type:Number,
        min:1,
        max:4,
        required:true
    }
},{timestamps:true})

const roomModel = mongoose.model("room",roomSchema)

module.exports = roomModel