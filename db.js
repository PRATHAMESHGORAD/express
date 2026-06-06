const mongoose = require('mongoose');

const connectDB = () =>{
    mongoose.connect("mongodb://localhost:27017/H2_ex")
    .then(() => {
       console.log("connected");
        
    }).catch((err) => {
        console.log(err);
        
    });
}
const empSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        min:15000,
        required:true
    },
    department:{
        type:String,
        enum:["HR","IT","ACC"],
        required:true
    }
},{timestamps:true})

const empModel = mongoose.model("emp",empSchema);
module.exports={connectDB,empModel}