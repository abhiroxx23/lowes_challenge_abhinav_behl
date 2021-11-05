const express = require("express")
const app = express()

// Database config
const connection = require('./config/db')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

// Routes Config
//parse incoming request body in JSON format.
app.use(express.json({
    extended: false
}))
app.use('/', require('./routes/redirect'))
app.use('/api', require('./routes/url'))

const PORT = 5000
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))
