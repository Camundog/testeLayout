const Sequelize = require('sequelize');
const database = require('../../db');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    participation:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = User;