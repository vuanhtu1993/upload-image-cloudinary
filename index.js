const express = require('express')
const router = require('./src/product')

const app = express()
app.use('/api/product', router)

const port = process.env.PORT || 3001

app.listen(port, function() {
    console.log("server run on port: ", port)
})