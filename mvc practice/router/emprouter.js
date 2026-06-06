const express = require('express');
const { showEmp, addEmp, updateEmp, deleteEmp } = require('../controller/empcontroller');



const router = express.Router()
router.get("/showEmp",showEmp)
router.post("/addEmp",addEmp)
router.put("/updateEmp/:id",updateEmp)
router.delete("/delete/:id",deleteEmp)

module.exports = router