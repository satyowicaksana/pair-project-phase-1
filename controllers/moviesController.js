const Model = require('../models')
const Movie = Model.Movie
const Review = Model.Review
const User = Model.User


class MovieController {
  static  findAll (req, res){
      Movie.findAll({order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['id', 'ASC']]})
        .then(dataMovies =>{
          res.send (dataMovies)
          res.render("movies",{dataMovies,err:req.query.err})
        })
        .catch(err =>{
          res.redirect(`/movies?err=${err.message}`)
        })
    }

  static findOneWithReviews (req, res) {
    Movie
    .findByPk(req.params.id, {include: [
      {
        model: Review,
        include: [User],
        required: true
      }
    ]})
    .then(movie => {
      // res.send(movie)
      res.render('movies-show-reviews', {movie, err:req.query.err})
    })
    .catch(err => {
      res.redirect(`/movies/${req.params.id}?err=${err.message}`)
    })
  }

  static addReview (req, res) {
    Movie
    .findByPk(req.params.id)
    .then(movie => {
      res.render('movies-add-review', {movie, err:req.query.err})
    })
    .catch(err => {
      res.redirect(`/movies/${req.params.id}?err=${err.message}`)
    })
  }

  static addReviewPost (req, res) {
    Review
    .create({
      reviewTitle: req.body.reviewTitle,
      description: req.body.description,
      rating: req.body.rating,
      UserId: 1,
      MovieId: req.params.id
    })
    .then(created => {
      res.redirect(`/movies/${req.params.id}`)
    })
    .catch(err => {
      res.redirect(`/movies/${req.params.id}/add-review/?err=${err.message}`)
    })
  }
}

module.exports = MovieController