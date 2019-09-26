const express = require('express')
const app = express()

const routes = require('./routes/router')

const session = require('express-session')
app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/', routes);

app.listen(3000,()=>{
  console.log(`listen server`)
})