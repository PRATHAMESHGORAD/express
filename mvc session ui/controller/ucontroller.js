

const empModel = require('../model/emodel')
const userModel = require('../model/umodel')
const bcryptjs = require('bcryptjs');

const showEmp = async(req,resp)=>{
     if(!req.session.name){
         return resp.redirect("/login");
    }
    try {
        const data = await empModel.find()
        resp.render("show",{data,username:req.session.name})
        
    } catch (error) {
        console.log(error);
        
    }
}
const addForm = (req,resp)=>{
    resp.render("add")
}
const addEmp = async(req,resp)=>{
    try {
        const data = new empModel({
            name:req.body.name,
            salary:req.body.salary,
            dept:req.body.dept
        })
        await data.save()
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

const editform = async(req,resp)=>{
    try {
        const data = await empModel.findById(req.params.id)
        console.log(data);
        
        resp.render("edit",{data})
    } catch (error) {
        console.log(error);
        
    }
}
const register = async(req,resp)=>{
    try {
        const {uname,email,password} = req.body
        const hashpassword = await bcryptjs.hash(password,10)
        await userModel.create({uname,email,password:hashpassword})
        resp.redirect("/login")
    } catch (error) {
        console.log(error);
        
    }
}

const login = async(req,resp)=>{
    try {
        const {uname,password} = req.body
        const user = await userModel.findOne({uname})
        if(user && await bcryptjs.compare(password,user.password)){
            req.session.name = uname
            resp.redirect("/showEmp")
        }else{
            resp.redirect("/login")
        }
    } catch (error) {
        console.log(error);
        
    }
}


const logout = async(req,resp)=>{
    req.session.destroy(()=>{
        resp.redirect("/login")
    })
}

module.exports = {showEmp,addForm,addEmp,updateEmp,deleteEmp,editform,register,login,logout}