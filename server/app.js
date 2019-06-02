const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const routes = require('./routes/routes')

const app = express()

app.use(bodyParser.json())

mongoose.connect(process.env.databaseUrl, {useNewUrlParser: true});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!')
});

app.use((req, res, next) => {
  console.log(req.originalUrl)
  res.header('Access-Control-Allow-Origin', process.env.frontend)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

routes.routeList(app)

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001'))
