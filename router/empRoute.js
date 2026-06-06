const express = require('express');
const router = express.Router();
const {showEmp,addEmp,searchEmp,updateEmp,deleteEmp, addForm}=require("../controller/empController")

router.get("/showEmp", showEmp);
// 8
router.get("/addEmp",addForm)
router.post("/addEmp", addEmp);
router.get("/searchEmp/:id", searchEmp);
router.patch("/updateEmp/:id", updateEmp);
router.delete("/deleteEmp/:id", deleteEmp);

module.exports=router;