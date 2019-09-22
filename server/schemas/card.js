const mongoose = require('mongoose')
const { Schema } = mongoose

const cardSchema = new Schema({
  title: String,
  subtitle: String,
  pictures: String,
  note: String
})

module.exports = cardSchema
