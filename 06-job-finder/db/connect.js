const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB