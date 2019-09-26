const routes = require('express').Router();
const controller = require('../controllers/moviesController')

routes.get('/', (req,res) =>{
  res.send('test')
})

routes.get('/movies', controller.findAll)

routes.get('/movies/:id', controller.findOneWithReviews)

routes.get('/movies/:id/add-review', controller.addReview)
routes.post('/movies/:id/add-review', controller.addReviewPost)


module.exports = routes