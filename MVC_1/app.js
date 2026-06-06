const express = require('express');
const {connectDB} = require("./db");    
const empRoute = require("./router/empRoute");

connectDB();

const app = express();

app.use(express.json());
// 9
app.use(express.urlencoded({extended:true}))
// 2
app.set("view engine","ejs")
app.use("/",empRoute);

app.listen(4000,()=>{
    console.log("Runnning....");
});    