const mongoose = require('mongoose')
const cardSchema = require('../schemas/card')
const { model } = mongoose

const Card = model('Card', cardSchema)

module.exports = {
  saveCard: async (request, response) => {
    try {
      const cards = new Card(request.body);
      const result = await cards.save();
      response.send(result);
    } catch (error) {
      response.status(500).send(error);
      }
    }
  }
