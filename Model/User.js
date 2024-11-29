const knex = require('../Database/Connection');

class User{
    async findAll(){
        return await knex.select('*').table('users');
    }
    async create(nome,email){
        return await knex.insert({nome,email}).table('users')
    }
    async findById(id){
        return await knex.select('*').where({id:id}).table('users')
    }


}

module.exports = new User();