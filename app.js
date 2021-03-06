const express = require('express')
const app = express()

const routes = require('./routes/router')

const session = require('express-session')

const port = process.env.PORT || 3000
app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(port,()=>{
  console.log(`listen server`)
})