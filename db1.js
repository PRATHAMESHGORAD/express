const mongoose = require('mongoose');
const connectDB = ()=>{
    mongoose.connect("mongoose://localhost:27017/h2_ex")
    .then(() => {
      console.log("connected");
        
    }).catch((err) => {
        console.log(err);
        
    });
}
const empschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        min:15000,
        required:true,
    },
    department:{
        type:String,
        enum:["HR","IT"],
        required:true
    }
},{timestamps:true})

const empModel = mongoose.model("emp",empschema)
module.exports = {connectDB,empModel}