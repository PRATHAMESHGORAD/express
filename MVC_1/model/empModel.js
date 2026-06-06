const mongoose = require('mongoose');
const empSchema =  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
       
        min:100000,
        max:250000,
        required:true, 
    },
    department:{
        type:String,
        enum:["HR","IT","Sales"],
        required:true

    },
    address:{
        type:String,
        default:"XYZ"
    }
},{timestamps:true});


//model
const empModel = mongoose.model("emp",empSchema);

module.exports=empModel;
    