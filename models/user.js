'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {}
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {sequelize, modelName: 'User'});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review)
  };
  return User;
};