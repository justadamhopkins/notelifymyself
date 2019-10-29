const mongoose = require('mongoose')
const categorySchema = require('../schemas/category')
const { model } = mongoose

const Category = model('Category', categorySchema)

module.exports = {
  addCategory: async (request, response) => {
    try {
      const category = new Category(request.body)
      const result = await category.save()
      response.send(result)
    } catch (error) {
      response.status(500).send(error)
    }
  }
}
