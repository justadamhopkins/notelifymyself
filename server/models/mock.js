const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mockPersonSchema = new Schema({
  name: String,
  age: Number
  adopted: Boolean
})

const Blog = mongoose.model('MockPerson', mockPersonSchema);