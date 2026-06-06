const express = require('express');
const router = require('./route/uroute')
const {connectDB} = require('./db')
const methodOverride = require('method-override')
const session = require('express-session')

connectDB()
const app = express()
app.use(express.json())
app.use(session({
    secret:"zyxgchsbdjshv",
    resave:false,
    saveUninitialized:false
}))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.set("view engine","ejs")
app.use("/",router)

app.listen(5000,()=>{
    console.log("running");
    
})