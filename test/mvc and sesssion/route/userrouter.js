const express = require('express');
const { addform,showRoom, addRoom, updateRoom, editform, register, logout, login, deleteRoom } = require('../controller/usercontroller');
const upload = require('../middleware/upload');

const router = express.Router()

router.get("/addRoom",addform)
router.get("/showRoom",showRoom)

router.delete("/deleteRoom/:id",deleteRoom)
router.put("/updateRoom/:id",updateRoom)
router.get("/editform/:id",editform)

router.get("/",(req,resp)=>{
    resp.render("register")
})
router.post("/register",register)
router.get("/login",(req,resp)=>{
    resp.render("login")
})
router.post("/login",login)
router.get("/logout",logout)

router.post("/addRoom",upload.single("image"),addRoom)

module.exports = router