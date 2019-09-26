const routes = require('express').Router();
const controller = require('../controllers/moviesController')

routes.get('/', (req,res) =>{
  res.send('test')
})

routes.get('/movies', controller.findAll)


module.exports = routes