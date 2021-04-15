const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_teste', 'root', 'Bpereira12', {
    dialect: 'mysql',
    host: 'localhost',
})

 
module.exports = sequelize;