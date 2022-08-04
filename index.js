const express = require('express')
const product = require('./src/product')
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json({limit: '0.2mb'}))
app.use(express.urlencoded({limit: '0.2mb', extended: true}))
app.use('/api', product)

const port = process.env.PORT || 3002

app.listen(port, function() {
    console.log("server run on port: ", port)
})