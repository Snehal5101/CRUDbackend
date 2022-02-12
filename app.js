//initialize
let express = require ("express");
let app = express();
let cors = require ('cors');
let Stud = require("./Route/student");
let Teach = require("./Route/teacher");

const mongoose = require("mongoose");


//midleware
app.use(express.json());
app.use(cors());


//route
app.use("/student",Stud);
app.use("/teacher",Teach);


mongoose.connect('mongodb://localhost:27017/schooldb',()=>
{console.log ("db connected..");})





app.listen(5000);