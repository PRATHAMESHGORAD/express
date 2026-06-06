const empModel = require("../model/empmodel");

const addform=(req,resp)=>{
resp.render("add")
}

const showEmp =async(req,resp)=>{
    try {
        const result = await empModel.find();
        resp.render("show",{result})
    } catch (error) {
        console.log(error);
        
    }
}

const addEmp= async(req,resp)=>{
    try {
        const result= new empModel({
            name:req.body.name,
            salary:req.body.salary,
            dept:req.body.dept
        })
        await result.save();
        resp.redirect("/showEmp")
        
    } catch (error) {
        console.log(error);
        
    }
}

const deleteEmp = async (req,resp)=>{
    try {
        await empModel.findByIdAndDelete(req.params.id)
        resp.redirect("/showEmp")
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    showEmp,addEmp,addform,deleteEmp
}