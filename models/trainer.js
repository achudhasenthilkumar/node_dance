const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Trainer = sequelize.define('Trainer', {
  fatherName: DataTypes.STRING,
  motherName: DataTypes.STRING,
  isArtist: DataTypes.BOOLEAN,
  yearsPracticed: DataTypes.INTEGER,
  hasDanceAcademy: DataTypes.BOOLEAN,
  academyDuration: DataTypes.STRING,
  expectedServices: DataTypes.STRING
}, {
  tableName: 'trainers'
});

Trainer.belongsTo(User);

module.exports = Trainer;
