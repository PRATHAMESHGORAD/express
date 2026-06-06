

const empModel = require('../model/empmodel')

const addform=(req,resp)=>{
resp.render("add")
}
const showEmp = async(req,resp)=>{
    try {
        const data = await empModel.find()
        resp.render("show",{data})
    } catch (error) {
        console.log(error);
        
    }
}

const addEmp = async(req,resp)=>{
    try {
        const data = new empModel({
            name:req.body.name,
            salary:req.body.salary,
            dept:req.body.dept
        })
        await data.save();
        resp.redirect("/showEmp")
    } catch (error) {
        console.log(error);
        
    }
}

const deleteEmp = async(req,resp)=>{
    try {
        await empModel.findByIdAndDelete(req.params.id)
        resp.redirect("/showEmp")
    } catch (error) {
        console.log(error);
        
    }
}
const updateEmp = async(req,resp)=>{
    try {
        await empModel.findByIdAndUpdate(req.params.id,req.body)

        resp.redirect("/showEmp")
    } catch (error) {
        console.log(error);
        
    }
}
const editForm = async(req,resp)=>{
    try {
        const data = await empModel.findById(req.params.id) 
        console.log(data);
        resp.render("edit",{data})
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {addform,showEmp,addEmp,deleteEmp,updateEmp,editForm}

