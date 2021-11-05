const mongoose = require('mongoose')

const URLSchema = new mongoose.Schema({
    urlCode: String, 
    originalUrl: String,
    shortUrl: String,
    date:{type: String, default: Date.now},
    hits:{type: Number, default:0}
})

module.exports = mongoose.model('Url',URLSchema)
