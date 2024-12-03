const knex = require('../Database/Connection');

class User{
    async findAll(){
        return await knex.select('*').table('users');
    }async create(name,email,password){
    
        return await knex.insert(name,email,password).table('users');
    }
    async findById(id){
        return await knex.select('*').where({id:id}).table('users');
    }
    async deleteUser(id){
        return await knex.delete().where({id:id}).table('users');
    }
    async update(id,name, email,password){
        return await knex.update({name,email,password}).table('users').where(id);
    }
}

module.exports = new User();