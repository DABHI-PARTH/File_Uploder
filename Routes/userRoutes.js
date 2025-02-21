const express= require('express');
const app=express();
const user=require('../models/userModel');
const upload=require('../Middleware/uploadMiddleware');
let count =0;

app.get('/', (req,res)=>{
    try{
        
        res.render("index"); 
                          
    }
    catch(err){

        console.log(err);
        res.status(500).json({message:"Internal server error"});
    }
});
app.post('/upload',upload,async (req,res)=>{
    try{
        const data =new user({
            name: req.body.name,
            password: req.body.password,
            image : req.file.filename
        });
        const result=data.save();
        console.log("Data Saved");
        count ++;
        if (count == 1) {
         await  res.render("home");
          }
          count --;
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"});
    }
});

module.exports=app;