const multer = require("multer")

const diskStorage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, 'public/')
    },
    filename : (req, file, cb)=>{
        const fileName = Date.now() + "-" + file.originalname
        cb(null, fileName)
    }
})

const upload = multer({ storage : diskStorage})

module.exports = { upload }