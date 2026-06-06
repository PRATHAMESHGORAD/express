const userModel = require("../model/userModel");
const bcryptjs = require('bcryptjs');

// logic
const register = async (req,resp) =>{
    try {
        const {uname, email, password}  = req.body;
        const hashPassword = await bcryptjs.hash(password,10)
        console.log(hashPassword);
        await userModel.create({uname, email, password:hashPassword})
        resp.json("Registered Successfully!!!!")
    } catch (error) {
        console.log(error);
    }
}

const login = async (req,resp) =>{
    try {
        const {uname, password} = req.body
        // find user if exists?
        const user = await userModel.findOne({uname})       
        // depending on user compare password
        if (user && await bcryptjs.compare(password, user.password)) {
            // session data store
            req.session.name = uname
            resp.json("loggedd in..")
        } else {
            resp.json("invalid credentials")
        }
    } catch (error) {
        console.log(error);
    }
}

const dashboard = async(req,resp) =>{
    if (!req.session.name) {
        resp.json("kindly login first!!!")
    } else {
        resp.json(req.session.name)
    }
}

const logout = async (req,resp) =>{
    req.session.destroy(()=>{
        resp.json("logged outt...")
    })
}

module.exports = {register,login, dashboard , logout}