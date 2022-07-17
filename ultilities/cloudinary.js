const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: "dv3vzmogk",
    api_key: "132795416711217",
    api_secret: "OXWReBjiCCpmBBsWJn-tlImyJHE" 
})

module.exports = {cloudinary}