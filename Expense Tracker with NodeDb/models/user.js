const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const User = sequelize.define('expenses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    item: Sequelize.STRING,
    amount: Sequelize.INTEGER
})

module.exports = User;