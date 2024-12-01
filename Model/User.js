const knex = require('../Database/Connection');

class User{
    async findAll(){
        return await knex.select('*').table('users');
    }async create(nome,email,senha){
        return await knex.insert({nome,email,senha,created_at:knex.fn.now(), updated_at:knex.fn.now()}).table('users');
    }
    async findById(id){
        return await knex.select('*').where({id:id}).table('users');
    }
    async deleteUser(id){
        return await knex.delete().where({id:id}).table('users');
    }
    async update(id,nome, email){
        return await knex.update({nome,email}).table('users').where(id);
    }
}

module.exports = new User();