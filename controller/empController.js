const { response } = require("express");
const empModel = require("../model/empModel")
// 6
const addForm = (req,resp)=>{
    resp.render("add")
}
const addEmp = async (req, res) => {
    try{
        const data=new empModel(
            {
                name:req.body.name,
                salary:req.body.salary,
                department:req.body.department,
            }
        );
        // 7
        await data.save();
        res.redirect("/showEmp");
    }
    catch (error) {
        console.log(error);
    }
}

const searchEmp = async (req, resp) => {
    try {
        const data= await empModel.findById(req.params.id);
        resp.json(data);
    }
    catch (error) {
        console.log(error);
    }
}

const showEmp = async (req, resp) => {
    try {
        const data= await empModel.find();
        // 4
        resp.render("show",{data})
    }
    catch (error) {
        console.log(error);
    }
}
const updateEmp = async (req, resp) => {
    try{
            const data=await empModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
            resp.json(data);
        }
        catch(error){
            console.log(error);
        }
} 

const deleteEmp = async (req, resp) => {
    try{
            const data=await empModel.findByIdAndDelete(req.params.id);
            resp.json(data);
        }
        catch(err){
            console.log(err);
            
        }
}



module.exports={showEmp,addEmp,searchEmp,updateEmp,deleteEmp,addForm};