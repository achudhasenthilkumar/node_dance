const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./role');

const User = sequelize.define('User', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  address1: DataTypes.STRING,
  address2: DataTypes.STRING,
  country: DataTypes.STRING,
  state: DataTypes.STRING,
  city: DataTypes.STRING,
  pincode: DataTypes.STRING,
  landmark: DataTypes.STRING,
  email: DataTypes.STRING,
  phoneNumber: DataTypes.STRING
}, {
  tableName: 'users'
});

User.belongsTo(Role);

module.exports = User;
