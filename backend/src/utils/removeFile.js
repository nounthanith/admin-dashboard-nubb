const fs = require('fs')

const removeFile = (fileName) => {
    fs.unlinkSync(`public/${fileName}`)
}

module.exports = {
    removeFile
}
