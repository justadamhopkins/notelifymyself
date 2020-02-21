const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const env = process.env.enviroment
const app = express()

app.use(bodyParser.json())

if ((env === 'dev') | (env === 'dev')) {
  mongoose.connect(process.env.databaseUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })

  const db = mongoose.connection

  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    console.log("we're connected!")
  })
}

app.use((req, res, next) => {
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

module.exports = app
