const mongoose = require('mongoose');

const connectDB = () =>{
    mongoose.connect("mongodb://localhost:27017/h2_session") .then(() => {
        console.log("connected...");
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {connectDB}