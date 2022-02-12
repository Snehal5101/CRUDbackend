const Techer=require("../Model/teach");

exports.savedata= async (teach)=>{
    try{
        const teachdata = new Techer(teach);
        const data = await teachdata.save();
        return{errors:false , data:data}
    }catch(e){
        return{error:true,messages:e}
    }
}

exports.getdata= async ()=>{
    try{
        const data = await Techer.find();
        return{errors:false , data:data}
    }catch(e){
        return{error:true,messages:e}
    }
}

exports.getdataById= async (id)=>{
    try{
        const data = await Techer.findById(id);
        return{errors:false , data:data}
    }catch(e){
        return{error:true,messages:e}
    }
}

exports.updatedataById= async (id,teach)=>{
    try{
        const data = await Techer.findByIdAndUpdate(id,teach,{new:true});
        return{errors:false , data:data}
    }catch(e){
        return{error:true,messages:e}
    }
}

exports.deletedataById= async (id)=>{
    try{
        const data = await Techer.findByIdAndDelete(id);
        return{errors:false , messages:"Data Deleted Sucessfully..!!"}
    }catch(e){
        return{error:true,messages:e}
    }
}