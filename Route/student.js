const Route = require('express').Router();
const Stud = require('../Model/stud');

Route.get("/",function (req,res){
    res.send("Student Data");
});

Route.post('/stud',async(req,res)=>{
    try{
        const stud = new Stud (req.body);
        const data = await stud.save();
        res.send(data);
    }
    catch(e){
        res.status(400).send(e);
    }
});

Route.get('/stud',async(req,res)=>{
    try{
        const data = await Stud.find();
        res.send(data);
    }
    catch(e){
        res.status(400).send(e);
    }
});


Route.get('/id/:id',async(req,res)=>{
    try{
        let id = req.params.id ;
        const data = await Stud.findById(id);
        res.send(data);
    }
    catch(e){
        res.status(400).send(e);
    }
});

Route.put('/stud/:id',async(req,res)=>{
    try{
        const id = req.params.id ;
        const data = await Stud.findByIdAndUpdate(id,req.body,{new:true});
        res.send(data);
    }
    catch(e){
        res.status(400).send(e);
    }
});

Route.delete('/delete/:id',async(req,res)=>{
    try{
        const id = req.params.id ;
        await Stud.findByIdAndDelete(id);
        res.send("Data Deleted Sucessfully");
    }
    catch(e){
        res.status(400).send(e);
    }
});




module.exports = Route;