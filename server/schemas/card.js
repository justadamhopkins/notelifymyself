const mongoose = require('mongoose')
const { Schema } = mongoose

const cardSchema = new Schema({
  title: String,
  subtitle: String,
  pictures: String,
  note: String,
  catId: String
})

module.exports = cardSchema
