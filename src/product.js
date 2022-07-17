const express = require('express')
const router = express.Router()
const {cloudinary} = require('../ultilities/cloudinary')


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

router.post('/upload', async function(req, res) {
    try {
        const fileStr = req.body.data
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: "anhhtus"
        })
        res.send(uploadResponse)
    } catch(err) {
        return res.status(500).send(err)
    }
})

module.exports = router