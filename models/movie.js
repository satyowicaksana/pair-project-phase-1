'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Movie extends Model {}
  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    rated: DataTypes.STRING,
    released: DataTypes.DATE,
    runtime: DataTypes.STRING,
    genre: DataTypes.STRING,
    director: DataTypes.STRING,
    writer: DataTypes.STRING,
    actor: DataTypes.STRING,
    plot: DataTypes.TEXT,
    languages: DataTypes.STRING,
    country: DataTypes.STRING,
    awards: DataTypes.STRING,
    poster: DataTypes.TEXT
  }, {sequelize, modelName: 'Movie'});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Review)
  };
  return Movie;
};