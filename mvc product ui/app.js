const express = require('express');
const {connectDB} = require('./db')
const productroute = require('./route/productroute')

const methodOverride = require('method-override')

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.set("view engine","ejs")
app.use("/",productroute)

app.listen(4440,()=>{
    console.log("running");
    
})