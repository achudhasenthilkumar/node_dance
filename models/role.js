const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
  name: DataTypes.STRING
}, {
  tableName: 'roles'
});

module.exports = Role;
