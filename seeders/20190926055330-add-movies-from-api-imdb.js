'use strict';

const imdb = require('imdb-api')
const key = '829ccbd7'

const keyId = ['tt0068646', 'tt0071562', 'tt0099674', 'tt0150742', 'tt0809488' ]

let promises = []
  keyId.forEach(element => {
  
  promises.push (imdb.get({
    id:element
  }, {
    apiKey: key
  }))
});


module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return Promise.all(promises)
    
      .then (movies =>{
        let arr = []
        movies.forEach(movie => {
          let objMovie = {
            title: movie.title,
            year: movie.year,
            rated: movie.rated,
            released: movie.released,
            runtime: movie.runtime,
            genre:movie.genres,
            director: movie.director,
            writer: movie.writer,
            actor: movie.actors,
            plot: movie.plot,
            languages: movie.languages,
            country:movie.country,
            awards: movie.awards,
            poster:movie.poster,
            createdAt : new Date(),
            updatedAt : new Date()
          }
          arr.push(objMovie)
        })
        //  console.log(arr)
        return  queryInterface.bulkInsert('Movies', arr)   
      })
  
  // return Promise.all(promises)
  // .then (movies =>{
  //   movies.forEach(movie => {
  //     movie.createdAt = new Date()
  //     movie.updatedAt = new Date()
  //   })
  //   //  queryInterface.bulkInsert('Movies', movies)   
  // })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
