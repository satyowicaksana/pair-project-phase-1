'use strict';

const imdb = require('imdb-api')
const key = '829ccbd7'

const keyId = ['tt0462499','tt0089880','tt0095956','tt1905041','tt0232500','tt1013752','tt0322259','tt0463985','tt6806448','tt3183660','tt4123430','tt1201607','tt0241527','tt0295297','tt0304141','tt0330373','tt0373889','tt0926084','tt0417741','tt2375379','tt1485763','tt5251328','tt0814243','tt0832449','tt1010435','tt1006926','tt1018764','tt1037116','tt0997084']

// ,,,,,'tt4633694','tt6320628','tt1872181'
// const keydelay = 



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
      .catch(console.log)
  
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
