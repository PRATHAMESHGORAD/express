const express = require('express');
const { addproductform, showproduct, addproduct, deleteproduct, updateproduct, editproductform } = require('../controller/productcontroller');

const router = express.Router()
router.get("/addproduct",addproductform)
router.get("/showproduct",showproduct)
router.post("/addproduct",addproduct)
router.delete("/deleteproduct/:id",deleteproduct)
router.get("/editproductform/:id",editproductform)
router.put("/updateproduct/:id",updateproduct)


module.exports = router