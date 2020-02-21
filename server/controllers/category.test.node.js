const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app') // Link to your server file
const request = supertest(app)
const databaseName = 'test'
const categorySchema = require('../schemas/category')
const { model } = mongoose

const Category = model('Category', categorySchema)

async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections)
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName]
    // eslint-disable-next-line no-await-in-loop
    await collection.deleteMany()
  }
}

async function dropAllCollections() {
  const collections = Object.keys(mongoose.connection.collections)
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName]
    try {
      await collection.drop()
    } catch (error) {
      // This error happens when you try to drop a collection that's already dropped. Happens infrequently.
      // Safe to ignore.
      if (error.message === 'ns not found') return

      // This error happens when you use it.todo.
      // Safe to ignore.
      if (
        error.message.includes('a background operation is currently running')
      ) {
        return
      }

      console.log(error.message)
    }
  }
}

describe('category', () => {
  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/${databaseName}`
    await mongoose.connect(url, { useNewUrlParser: true })
  })

  afterEach(async () => {
    await removeAllCollections()
  })

  // Disconnect Mongoose
  afterAll(async () => {
    await dropAllCollections()
    // Closes the Mongoose connection
    await mongoose.connection.close()
  })

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
