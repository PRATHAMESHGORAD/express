const userModel = require('../model/userModel')
const bcryptjs = require('bcryptjs')

const register = async(req,resp)=>{
    try {
        const {uname,email,password}= req.body

        const hashPassword = await bcryptjs.hash(password,10)
        console.log(hashPassword);
        await userModel.create({uname,eamil,password:hashPassword})
        resp.json("registered successfully")
        
    } catch (error) {
        console.log(error);
        
    }
}

const login = async(req,resp)=>{
    try {
        const{unmae,password} = req.body

        const user = await userModel.findOne({uname})
        if (user && await bcryptjs.compare(password, user.password)) {
                    req.session.name = uname
                    resp.json("loggedd in..")
                } else {
                    resp.json("invalid credentials")
                }
    } catch (error) {
        console.log(error);
        
    }
}

const dashboard = async(req,resp)=>{
    if (!req.session.name) {
        resp.json("kindlly  login first")
    } else {
        resp.json(req.session.name)
    }
}

const logout = async(req,resp)=>{
    req.session.destroy(()=>{
        resp.json("logged out")
    })
}

module.exports = {register,login,dashboard,logout}