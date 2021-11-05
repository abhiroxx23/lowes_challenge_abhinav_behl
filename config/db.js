const mongoose = require('mongoose')

const DB_URI = 'mongodb://mongo:27017/url-shortener'

mongoose.connect(DB_URI,{useNewUrlParser:true, useUnifiedTopology:true})

const connection = mongoose.connection

module.exports = connection
