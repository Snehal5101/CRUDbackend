const mongoose = require ("mongoose");
const studSchema = mongoose.Schema({
    Name:{
        type:String ,
        required : true
    },
    RollNo : {
        type : Number,
        required : true
    },
    Marks: {
        type : Number,
        required : true
    },
    CreatedDates:{
        type:Date,
        default : Date.now()
    }
});


module.exports = mongoose.model("Student_Data",studSchema);