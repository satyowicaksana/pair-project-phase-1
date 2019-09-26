const routes = require('express').Router();
const controller = require('../controllers/moviesController')
const controllerAuth = require('../controllers/authController')
const ReviewController = require('../controllers/ReviewController')

const cekLogin = function (req, res, next){
  if(!req.session.user){
    res.redirect(`/login`)
  } else {
    next()
  }
}


routes.get('/', controller.findAll)


routes.get('/movies', controller.findAll)
routes.get('/register', (req,res) =>{
  res.render('register', {err:req.query.err})
})

routes.post('/register', controllerAuth.register)
routes.get('/login', (req, res) =>{
  res.render ('login', {err:req.query.err})
})
routes.post('/login', controllerAuth.login)

routes.get('/logout', (req, res) =>{
  req.session.destroy(function (err){
    console.log('ceklogout')
    res.redirect('/movies')
  })
})

routes.get('/movies/:id', controller.findOneWithReviews)

routes.get('/movies/:id/add-review', controller.addReview)
routes.post('/movies/:id/add-review', controller.addReviewPost)

routes.get('/movies/:id/edit-review', controller.editReview)

routes.post('/reviews/:id/edit', ReviewController.editPost)
routes.get('/reviews/:id/delete', ReviewController.delete)

module.exports = routes