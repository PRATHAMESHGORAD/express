const userModel = require('../model/usermodel');
const bcryptjs = require('bcryptjs')

const register = async (req,resp)=>{
    try {
        const {uname,email,password} = req.body
        const hashpassword = await bcryptjs.hash(password,10)
        await userModel.create({uname,email,password:hashpassword})
        resp.redirect("/login")
    } catch (error) {
        console.log(error);
        
    }
}

const login = async (req,resp)=>{
    try {
        const {uname,password} = req.body
        const user = await userModel.findOne({uname})
        if(user && await bcryptjs.compare(password,user.password) ){
            req.session.name = uname
            resp.redirect("/dashboard")
        }else{
            resp.redirect("/login")
        }
    } catch (error) {
        console.log(error);
        
    }
}

const dashboard = async (req,resp)=>{
    if (!req.session.name) {
        resp.redirect("/login")
    } else {
        resp.render("dashboard",{data:req.session.name})
    }
}

const logout = async (req,resp)=>{
    req.session.destroy(()=>{
        resp.redirect("/login")
    })
}

module.exports = {register,login,dashboard,logout}