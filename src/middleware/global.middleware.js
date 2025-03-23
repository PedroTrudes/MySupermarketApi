const mongoose = require("mongoose");

const validId = async(req, res, next) =>{
    try {
        const idReq = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(idReq)){
            return res.status(400).json({message: "Id invalid"})
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    next();
}


module.exports = {validId}