const knex = require('../Database/Connection');

class User{
    async findAll(){
        return await knex.select('*').table('users');
    }
}

module.exports = new User();