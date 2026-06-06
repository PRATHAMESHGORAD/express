const productModel = require('../model/productmodel')

const addproductform=(req,resp)=>{
    resp.render("add")
}

const showproduct = async (req,resp)=>{
    try{
    const data = await productModel.find()
    resp.render("show",{data})
    }
    catch(err){
        console.log(err);
        
    }
}

const addproduct = async (req,resp)=>{
    try {
        const data = new productModel({
            pname:req.body.pname,
            pprice:req.body.pprice,
            category:req.body.category
        })
        await data.save()
        resp.redirect("/showproduct")
    } catch (error) {
        console.log(error);
        
    }
}

const deleteproduct = async(req,resp)=>{
    try {
        await productModel.findByIdAndDelete(req.params.id)
        resp.redirect("/showproduct")
    } catch (error) {
        console.log(error);
        
    }
}

const updateproduct = async(req,resp)=>{
    try{
        await productModel.findByIdAndUpdate(req.params.id,req.body)
        resp.redirect("/showproduct")

    }
    catch(error){
        console.log(error);
        
    }
}

const editproductform = async(req,resp)=>{
   try {
     const data = await productModel.findById(req.params.id)
     console.log(data);
     resp.render("edit",{data})
   } catch (error) {
    console.log(error);
    
   }
    
}

module.exports = {addproductform,showproduct,addproduct,deleteproduct,updateproduct,editproductform}


