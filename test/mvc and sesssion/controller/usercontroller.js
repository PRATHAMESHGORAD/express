const rmodel = require('../model/rmodel')
const umodel = require('../model/umodel')
const bcryptjs = require('bcryptjs');

const addform=(req,resp)=>{
    resp.render("add")
}

const showRoom = async(req,resp)=>{
    if(!req.session.name){
         return resp.redirect("/login");
    }
    try {
        const data = await rmodel.find()
        resp.render("show",{data,username:req.session.name})
    } catch (error) {
        console.log(error);
        
        
    }
}

const addRoom = async(req,resp)=>{
    try {
        const data = new rmodel({
            roomnumber:req.body.roomnumber,
            roomtype:req.body.roomtype,
            pricepernight:req.body.pricepernight,
            capacity:req.body.capacity
        })
        await data.save()
        resp.redirect("/showRoom")
    } catch (error) {
        console.log(error);
        
    }
}
const deleteRoom =async(req,resp)=>{
    try {
        await rmodel.findByIdAndDelete(req.params.id)
        resp.redirect("/showRoom")
    } catch (error) {
        console.log(error);
        
    }
}

const updateRoom = async(req,resp)=>{
    try {
        await rmodel.findByIdAndUpdate(req.params.id,req.body)
        resp.redirect("/showRoom")
    } catch (error) {
        console.log(error);
        
    }
}

const editform = async(req,resp)=>{
    try{
        const data = await rmodel.findById(req.params.id)
        resp.render("edit",{data})
    }
    catch(error){
        console.log(error);
        
    }
}

const register = async(req,resp)=>{
    try {
        const {name,email,password} = req.body
        const hashpassword = await bcryptjs.hash(password,10)
        await umodel.create({name,email,password:hashpassword})
        resp.redirect("/login")
    } catch (error) {
        console.log(error);
        
    }
}

const login = async(req,resp)=>{
    try {
        const {name,password} = req.body
        const user = await umodel.findOne({name})
        if(user && await bcryptjs.compare(password,user.password)){
            req.session.name = name
            resp.redirect("/showRoom")
        }
        else{
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

module.exports = {addform,showRoom,addRoom,deleteRoom,updateRoom,editform,register,login,logout}