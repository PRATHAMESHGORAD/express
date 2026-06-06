const express = require('express');
const { connectDB } = require('./db');
const router = require('./route/userRoute');
const session = require('express-session');

const app = express()
// new addition
// session
app.use(session({
    secret:"zyxgchsbdjshv",
    resave: false,
    saveUninitialized : false,
}))

connectDB()
app.use(express.json())
app.use("/",router)

app.listen(4000,()=>{
    console.log("running....");
})