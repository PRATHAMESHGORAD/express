const express = require('express');
const session = require('express-session');
const router = require('./route/userRouter');
const { connectDB } = require('./db');

const app = express()


app.use(express.json())

app.use(session({
    secret:"zyxgchsbdjshv",
    resave: false,
    saveUninitialized : false,
}))
app.set("view engine","ejs")
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",router)

app.listen(4000,()=>{
    console.log("running..");
    
})
