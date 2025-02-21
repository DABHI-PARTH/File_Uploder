const mongoose= require('mongoose');
require('dotenv').config();
const dbUrl=process.env.Url;
mongoose.connect(dbUrl);
const db=mongoose.connection;

db.on('connected',()=>console.log("Database Connected"));
db.on('disconnected',()=>console.log("Database Disonnected"));
db.on('error',(error)=>console.error("Database error",error));

module.exports=db;