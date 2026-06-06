const express = require('express');

const {connectDB} = require('./db')
const emproute = require('./route/emproute')
const metheodOverride = require('method-override')
connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(metheodOverride("_method"))
app.set("view engine","ejs")

app.use("/",emproute)
app.listen(4444,()=>{
    console.log("running");
    
})