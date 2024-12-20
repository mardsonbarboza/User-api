const User = require('../Model/User');

class userController {
    async findUsers(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async newUser(req, res) {
        const { name, email, password } = req.body;
        try {
            await User.create({ name, email,password});
            res.status(201).json({msg:'cadastrado com sucesso'});
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async delete(req, res) {
        const id = req.params.id;
        try {
            const user = await User.findById(id);
            if (!user) {
                res.status(404).json({ msg: 'Usuário não encontrado' });
            } else {
                await User.deleteUser(user.id);
                res.status(200).json({ msg: 'Usuário deletado com sucesso' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    }

    async uptdateUser(req, res) {
        const id = req.params.id;
        const { name, email, password} = req.body;
        try {
            const user = await User.findById(id);
            if (!user) {
                res.status(404).json({ msg: 'Usuário não encontrado' });
            } else {
                await User.update({ id, name, email, password });
                res.status(200).json({ msg: 'Usuário atualizado com sucesso' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    }
}

module.exports = new userController();
