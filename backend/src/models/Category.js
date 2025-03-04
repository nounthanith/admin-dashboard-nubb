const { default: mongoose } = require("mongoose");


const categorySchema = mongoose.Schema({
    name : {
        type : String,
        require : [true, 'Name is require!!!'],
        unique : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category