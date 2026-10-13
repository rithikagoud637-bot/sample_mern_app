let express=require('express');
let router=express.Router();

let {users}=require('../models/users');
router.get("/viewemployees",async (req,res)=>{
    let result=await users.find();
    res.send(result);
})
//open postman choose get method
//localhost:3000/api/hr/viewemployees


router.delete("/deleteemployee/:id",async (req,res)=>{
    let deleterec=await users.findByIdAndDelete(req.params.id);
    if(deleterec){
    res.send("record deleted success");
    }
})
//open postman choose get delete
//localhost:3000/api/hr/deleteemployee/(id should pass here)


router.post("/assign-task",(req,res)=>{
    res.send("assign task router called");
})

module.exports=router;