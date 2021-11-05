const express = require("express")
const app = express()

const connection = require('./config/db')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

//parse incoming request body in JSON format.
app.use(express.json({
    extended: false
}))
app.use('/', require('./routes/redirect'))
app.use('/api', require('./routes/url'))

module.exports = app
