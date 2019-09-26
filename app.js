const express = require('express')
const app = express()

const routes = require('./routes/router')

app.set('view engine', 'ejs');


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(3000,()=>{
  console.log(`listen server`)
})