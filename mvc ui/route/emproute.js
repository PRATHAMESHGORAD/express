const express = require('express');

const { addform, addEmp ,showEmp, deleteEmp, editForm, updateEmp} = require('../controller/empcontroller');

const router = express.Router()

router.get("/addEmp",addform);//form
router.get("/showEmp",showEmp);//Show
router.post("/addEmp",addEmp)//ADD
router.delete("/delete/:id",deleteEmp)

router.get("/edit/:id",editForm)
router.put("/updateEmp/:id",updateEmp)
module.exports = router