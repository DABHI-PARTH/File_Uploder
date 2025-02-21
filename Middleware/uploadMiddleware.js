const express= require('express');
const app=express();
const path=require('path');
const multer=require('multer');



const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
      
          return cb(null,path.join("./Public/images"));
    },
    filename:(req,file,cb)=>{
        
        const filename= Date.now() + '_' + file.originalname  ;
          return cb(null,filename);
    }
});

const upload= multer({storage ,limits:{fileSize: 1*1024*1024}}).single('image');

module.exports=upload;
