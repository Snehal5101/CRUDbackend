const{savedata,getdata,getdataById,updatedataById,deletedataById}=require("../Controller/Teacher")

const route = require('express').Router();


route.get("/",function (req,res){
    res.send("Teacher Data");
});

//save route
route.post("/teach", async (req,res)=>{
    try{
        const result=await savedata(req.body);
        if(result.errors){
            res.status(400).send({errors:true,message:result.messages})
        }
        else{
            res.status(200).send({errors:false, data: result.data});
        }

    }    catch(e){
        res.status(400).send({errors:true,message:e})
    }
})


//getroute
route.get("/teach", async (req,res)=>{
    try{
        const result= await getdata();
        if(result.errors){
            res.status(400).send({errors:true,message:result.messages})
        }
        else{
            res.status(200).send({errors:false,data:result.data});
        }

    }    catch(e){
        res.status(400).send({errors:true,message:e})
    }
})

//getById route
route.get("/teach/:id", async (req,res)=>{
    try{
        const id=req.params.id;
        const result= await getdataById(id);
        if(result.errors){
            res.status(400).send({errors:true,message:result.messages})
        }
        else{
            res.status(200).send({errors:false,data:result.data});
        }

    }    catch(e){
        res.status(400).send({errors:true,message:e})
    }
})


//updateById route
route.put("/update/:id", async (req,res)=>{
    try{
        const id=req.params.id;
        const result= await updatedataById(id,req.body);
        if(result.errors){
            res.status(400).send({errors:true,message:result.messages})
        }
        else{
            res.status(200).send({errors:false,data:result.data});
        }

    }    catch(e){
        res.status(400).send({errors:true,message:e})
    }
})


//deleteById route
route.delete("/delete/:id", async (req,res)=>{
    try{
        const id=req.params.id;
        const result= await deletedataById(id);
        if(result.errors){
            res.status(400).send({errors:true,message:result.messages})
        }
        else{
            res.status(200).send({errors:false,data:result.messages});
        }

    }    catch(e){
        res.status(400).send({errors:true,message:e})
    }
})


module.exports = route;