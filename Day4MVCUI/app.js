const express = require('express');
const { connectDB } = require('./db');
const emproute= require('./route/emproute');
// new
const methodOverride = require('method-override');
connectDB();
const app =express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// new
app.use(methodOverride("_method"))
app.set("view engine","ejs");

app.use("/",emproute);

app.listen(4000,()=>{
    console.log("running......");
    
})

