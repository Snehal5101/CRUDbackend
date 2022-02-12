const mongoose = require ("mongoose");

const teachSchema = mongoose.Schema({
    Name:{type:String, required:true},
    Address:{type:String, required:true},
    MobNo:{type:Number, required:true},
    Sub:{type:String, required:true},
    CreatedDates:{type:Date,default : Date.now()},
});


module.exports = mongoose.model("Teacher_Data",teachSchema);
