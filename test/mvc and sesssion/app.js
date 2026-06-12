const express = require('express');

const router = require('./route/userrouter')
const {connectDB} = require('./db')
const methodOverride = require('method-override');
const session = require('express-session');
const morgan = require('morgan');


//connected
connectDB()
const app = express()
app.use(express.json())
app.use(morgan('short'))
app.use(session({
    secret:"zyxgchsbdjshv",
    resave:false,
    saveUninitialized:false
}))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.set("view engine","ejs")
app.use("/",router)

app.listen(2000,()=>{
    console.log("running");
    
})