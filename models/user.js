'use strict';

const bcrypt = require ('bcrypt') 

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {}

  User.init ({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  },{sequelize,
    hooks: {
      beforeCreate: (user) =>{
        const pass = user.dataValues.password
        const saltRounds = 10
        return bcrypt
        .hash(pass, saltRounds)
        .then (userPass =>{
          user.setDataValue('password',userPass)
        })
        .catch ( err => {
          throw err
        })

      }
    },
     modelName: "User"})
   
  
    
  
  // const User = sequelize.define('User', {
  //   username: DataTypes.STRING,
  //   password: DataTypes.STRING
  // }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};