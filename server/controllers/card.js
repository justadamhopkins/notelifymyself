const mongoose = require('mongoose')
const cardSchema = require('../schemas/card')
const { model } = mongoose

const Card = model('Card', cardSchema)

module.exports = {
  saveCard: async (request, response) => {
    try {
      const cards = new Card(request.body)
      const result = await cards.save()
      response.send(result)
    } catch (error) {
      response.status(500).send(error)
    }
  },
  removeCard: async (request, response) => {
    try {
      const remove = await Card.findOneAndRemove((request.body.id))
      response.send(remove)
    } catch (error) {
      response.status(500).send(error)
    }
  },
  fetchCategory: async (request, response) => {
    try {
      const categoryCards = await Card.find(({ catId: request.body.catId }))
      response.send(categoryCards)
    } catch (error) {
      response.status(500).send(error)
    }
  }
}
