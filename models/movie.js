'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
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
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};