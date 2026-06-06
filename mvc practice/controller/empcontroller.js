const empModel = require('../model/empmodel')

const showEmp = async(req,resp)=>{
    try {
        const data = await empModel.find();
        resp.json(data)
    } catch (error) {
        console.log(error);
        
    }
}

const addEmp = async(req,resp)=>{
    try{
        const data = new empModel ({
            name:req.body.name,
            salary:req.body.salary,
            dept:req.body.dept,
            
        });
        const result = await data.save();
        resp.json(result)

    }catch(err){
        console.log(err);
        
    }
}

const updateEmp = async(req,resp)=>{
    try {
        const result = await empModel.findByIdUpdate(req.params.id,req.body);
        resp.json(data)
    } catch (error) {
        console.log(error);
        
    }
}

const deleteEmp = async(req,resp)=>{
    try {
        const result = await empModel.findByIdDelete(req.params.id,req.body);
        resp.json(data)
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {showEmp,addEmp,updateEmp,deleteEmp}
