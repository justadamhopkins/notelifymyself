const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app') // Link to your server file
const request = supertest(app)
const categorySchema = require('../schemas/category')
const { setupDB } = require('../test-setup')
const { model } = mongoose

const Category = model('Category', categorySchema)

describe('category', () => {
  setupDB('categories')

  it('Gets the adds category endpoint', async (done) => {
    await request.post('/api/category').send({
      category: 'animals'
    })

    const cat = await Category.findOne({ category: 'animals' })

    expect(cat.category).toBe('animals')
    // ...
    done()
  })
})
