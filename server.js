const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/projects",(req,res)=>{

const projects = [

{
title:"Portfolio Website",
description:"Full Stack Portfolio built using HTML, CSS, JavaScript and Node.js"
},

{
title:"Student Management System",
description:"CRUD application for managing student records"
},

{
title:"Machine Learning Prediction",
description:"Predictive model developed using Python"
}

];

res.json(projects);

});

app.listen(3000,()=>{
console.log("Server Running on Port 3000");
});