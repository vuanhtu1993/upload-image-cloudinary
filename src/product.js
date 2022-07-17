const express = require('express')
const router = express.Router()


router.get('/', async function(req, res) {
    try {
        res.json({
            status: 200,
            message: "Get data product successfully"
        })
    } catch(err) {
        return res.status(500).send("Server error")
    }
})

module.exports = router