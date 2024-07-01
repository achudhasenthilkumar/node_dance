const sequelize = require('../config/database');
const User = require('./user');
const Role = require('./role');
const Student = require('./student');
const Trainer = require('./trainer');

User.belongsTo(Role);
Role.hasMany(User);

module.exports = {
  sequelize,
  User,
  Role,
  Student,
  Trainer
};
