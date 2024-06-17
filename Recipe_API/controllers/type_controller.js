const Type = require ("../Models/type");

exports.creatType = async (req,res)=>{
    try{
        const type = new Type(req.body);
        await type.save();
        res.status(201).send(type);
    } catch(error){
        res.status(500).send(error);
    }
};
exports.getAllTypes= async (req,res)=>{
    try{
        const type = await Type.find().populate("account");
res.send(type);
    } catch(error){
        res.status(500).send(error);
    }

};
exports.getTypeByID= async (req,res)=>{
    try{
const type = await Type.findById(req.perams.id).populate("account");
if(!type){
    return res.status(404).send({message:"not find"});
}
res.send(type);
    } catch(error){
        res.status(500).send(error);
    }
};
exports.getTypeByUser= async (req,res)=>{
    try{
    const type = await Type.find({account: req.perams.userId});
    res.send(type);
    } catch(error){
        res.status(500).send(error);
    }
};
exports.updateType = async (req,res)=>{
    try{
        const type = await Type.findByIdAndUpdate(req.perams.id, req.body,{
            new:true,
        });
        res.send(type);
    } catch(error){
        res.status(500).send(error);
    }
};
exports.deleteType= async (req,res)=>{
    try{
        const type = await Type.findByIdAndDelete(req.perams.id);
        if(!type){
            return res.status(404).send({message:"not find"});
        }
        res.status(204).send();
    } catch(error){
        res.status(500).send(error);
    }
};