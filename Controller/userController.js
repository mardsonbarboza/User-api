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
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async delete(req,res){
        var id  = req.params.id
        try {
            var idUser = await User.findById(id);
            if (!idUser) {
            res.status(404).json({msg:'usuario não encontrado'});
            } else {
                await User.deleteUser(idUser);
                res.status(200).json({msg:'Usuario deletado com sucesso'})
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async uptdateUser(req,res){
        var {id,nome,email} = req.body;
        try {
            var verifyUser = await User.findById(id);
            if (!verifyUser) {
                await User.update(id,nome,email);
                res.status(200).json({msg:'Usuario atualizado com sucesso'});
            } else {
                res.status(404).json({msg:'Erro ao atualizar usuario'})
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new userController();