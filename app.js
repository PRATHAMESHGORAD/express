const express = require('express');
const{connectDB,empModel} = require("./db")
const app = express();
app.use(express.json())
connectDB()

app.get("/showemp", async(req,resp)=>{
    try{
        const result = await empModel.find()
        resp.json(result)
    }
    catch(err){
        console.log(err);
        
    }
})
app.post("/addEmp",async(req,resp)=>{
    try{
        const data = new empModel({
            name:req.body.name,
            salary:req.body.salary,
            department:req.body.department
        })
        const result = await data.save()
        resp.json("data inserted")
        console.log(result);
        
    }
    catch(err){
        console.log(err);
        
    }
})
app.delete("/deleteEmp/:id", async (req, resp) => {
    try {
        const result = await empModel.findByIdAndDelete(req.params.id);

        resp.json(result);
    } 
    catch (err) {
        console.log(err);
        
    }
})
app.put("/updateEmp/:id", async (req, resp) => {
    try {

        const result = await empModel.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        resp.json(result);

    }
    catch (err) {

        console.log(err);

    }
});
app.listen(4000,()=>{
    console.log("runnig..");
    
})