const { default: mongoose } = require("mongoose");


exports.categorySchema = mongoose.Schema({
    name : {
        type : String,
        unique : true,
        require : [true, 'Name is require!!!']
    },
    note : {
        type : String,
    },
    createAt : {
        type : Date,
        default : Date.now()
    }
})

const Category = mongoose.model('Category', this.categorySchema)

module.exports =  Category 