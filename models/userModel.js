const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const crypto=require('crypto-js');
require('dotenv').config();
const key=process.env.KEY ;
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }


});

userSchema.pre('save',async function(next){

    if(!this.isModified('password')){
      return  next();
    }
    try{

    // password encryption using bcrypt module
        /*
        const salt=await bcrypt.genSalt(10);
        this.password= await bcrypt.hash(this.password,salt);*/

//password encryption using crypto module
        this.password= crypto.AES.encrypt(this.password,key).toString();
        next();
    }
    catch(err){
        console.log(err);
        next(err);

    }
});

const User= mongoose.model('User',userSchema);
module.exports=User;