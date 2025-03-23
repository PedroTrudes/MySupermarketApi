const userService = require("../service/user.service");

const registerUser = async(req , res) => {
    try {
        const userData = req.body;
        if(!userData.name || !userData.password || !userData.backgroundkv){
           return res.status(400).json({message: "Incomplete fields"})
        }
        await userService.createUser(userData);
        return res.status(201).json({message: "User created with success"})
 
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const getAllUser = async(req, res) => {
    try {
        const user = await userService.getAll();
        if(!user){
            return res.status(200).json({message: user});
        }
        return res.status(200).json({ListUser : user, quatity: user.length});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const getByIdUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.getById(userId);
        if(!user){
            return res.status(400).json({message: "User does not localized"});
        }
        return res.status(200).json({User: user});

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = {registerUser, getAllUser, getByIdUser};