const express = require('express');
const {showemp,addemp,deleteemp,updateemp} = require('../controller/empcontroller');

const router = express.Router();
router.get("/showemp",showemp);
router.post("/addemp",addemp);
router.delete("/deleteemp/:id",deleteemp);
router.put("/updateemp/:id",updateemp);


module.exports = router