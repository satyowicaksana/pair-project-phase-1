'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Review extends Model {}
  Review.init({
    reviewTitle: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {sequelize, modelName: 'Review'});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Movie)
    Review.belongsTo(models.User)
  };
  return Review;
};