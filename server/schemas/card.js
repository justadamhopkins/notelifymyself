const mongoose = require('mongoose')
const { Schema } = mongoose

const cardSchema = new Schema({
  title: String,
  subtitle: String,
  image: String,
  para: String
})

module.exports = cardSchema
