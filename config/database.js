const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dance_academy', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
