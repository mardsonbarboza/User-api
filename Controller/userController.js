const User = require('../Model/User');

class userController{
    async findUsers(req,res){
        try {
            var user = await User.findAll();
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    async newUser(req,res){
        var {nome,email} = req.body;
        try {
            var user = await User.create(nome,email);
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new userController();