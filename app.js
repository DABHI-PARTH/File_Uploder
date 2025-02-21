const express= require('express');
const app=express();
const path=require('path');
const router=require('./Routes/userRoutes');
require('./db');
require('dotenv').config();
const port=process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',router);



app.listen(port,()=>{
console.log("Server running on port:" + `${port}`)
});
