const express = require('express');
const { showEmp, addForm, addEmp, deleteEmp, updateEmp, editform, register, login, logout, } = require('../controller/ucontroller');

const router = express.Router()

router.get("/showEmp",showEmp)
router.get("/addEmp",addForm)
router.post("/addEmp",addEmp)
router.delete("/deleteEmp/:id",deleteEmp)
router.put("/updateEmp/:id",updateEmp)
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

module.exports = router