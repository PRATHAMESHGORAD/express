const empModel = require('../model/empmodel');

const showemp = async(req,resp)=>{
    try{
        const data = await empModel.find();
        resp.json(data)
    }
    catch(err){
        console.log(err);
        
    }
}

const addemp = async(req,resp)=>{
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
const deleteemp = async(req,resp)=>{
    try {
        const result = await empModel.findByIdAndDelete(req.params.id);
        resp.json(result)
    } catch (err) {
        console.log(err);
        
    }
}
const updateemp = async(req,resp)=>{
    try {
        const result = await empModel.findByIdAndUpdate(req.params.id,req.body);
        resp.json(result)
    } catch (err) {
        console.log(err);
        
    }
}


module.exports = { showemp,addemp,deleteemp,updateemp};
