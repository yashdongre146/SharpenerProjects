const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense-tracker', 'root', 'Clashofclans@02', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;