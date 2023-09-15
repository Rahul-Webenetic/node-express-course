const mongoose = require('mongoose')

const connectDB = (url) => {
  mongoose.set('strictQuery', false) // Remember this
  return mongoose.connect(url)
}

module.exports = connectDB
