const mongoose = require ("mongoose");
const typeSchema = new mongoose.Schema({
    title:{type:String, required: true},
    catagory:{type:String, required:true},
    difficulty:{type:Number, required:true},
    account:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    dateCreated:{type:Date,defualt:Date.now},
});
const Type = mongoose.model("Type",typeSchema);

module.exports = Type;