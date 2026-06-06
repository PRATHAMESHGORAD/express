const express = require('express');

const { addform, addEmp ,showEmp, deleteEmp} = require('../controller/empcontroller');

const router = express.Router()

router.get("/addEmp",addform);//form
router.get("/showEmp",showEmp);//Show
router.post("/addEmp",addEmp)//ADD
router.get("/delete/:id",deleteEmp)

module.exports = router