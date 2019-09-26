const Movie = require('../models').Movie


class MovieController {
  static  findAll (req, res){
      Movie.findAll({order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['id', 'ASC']]})
        .then(dataMovies =>{
          // res.send (dataMovies)
          res.render("movies",{dataMovies, err:req.query.err})
        })
        .catch(err =>{
          res.redirect(`/movies?err=${err.message}`)
        })
    }
}

module.exports = MovieController