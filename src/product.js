const express = require('express')
const router = express.Router()
const {cloudinary} = require('../ultilities/cloudinary')
const fs = require('fs')


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

router.get('/download', async function(req, res) {
    try {
        const fileDir =  __dirname + "/public/cube-skeleton.png"
        fs.access(fileDir, fs.constants.F_OK, err => {
            console.log(`${fileDir} is not existed, ${err}`)
        })

        fs.readFile(fileDir, function (err, content) {
            console.log(content)
            if (err) {
                res.writeHead(404, {"Content-type": "text/html"})
                res.end("<h1>No such file images</h1>>")
            } else {
                res.writeHead(200, {"Content-type": "application/vnd.android.package-archive"})
                res.end(content)
            }
        })
        // res.json({
        //     status: 200,
        //     message: __dirname + "/public/app-release.apk"
        // })
    } catch (err) {
        return res.status(500).send(err)
    }
})

module.exports = router