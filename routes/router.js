const routes = require('express').Router();
const controller = require('../controllers/moviesController')
const ReviewController = require('../controllers/ReviewController')

routes.get('/', (req,res) =>{
  res.send('test')
})

routes.get('/movies', controller.findAll)

routes.get('/movies/:id', controller.findOneWithReviews)

routes.get('/movies/:id/add-review', controller.addReview)
routes.post('/movies/:id/add-review', controller.addReviewPost)

routes.get('/movies/:id/edit-review', controller.editReview)

routes.post('/reviews/:id/edit', ReviewController.editPost)
routes.get('/reviews/:id/delete', ReviewController.delete)

module.exports = routes