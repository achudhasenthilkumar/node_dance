const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Student = sequelize.define('Student', {
  fatherName: DataTypes.STRING,
  motherName: DataTypes.STRING,
  class: DataTypes.STRING,
  schoolTiming: DataTypes.STRING,
  preferredTime: DataTypes.STRING,
  isNewComer: DataTypes.BOOLEAN,
  alreadyLearned: DataTypes.BOOLEAN,
  needExpertCoaching: DataTypes.BOOLEAN
}, {
  tableName: 'students'
});

Student.belongsTo(User);

module.exports = Student;
