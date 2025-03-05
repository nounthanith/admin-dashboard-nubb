const { default: mongoose } = require("mongoose");


const userSchema = mongoose.Schema({
    name: {
        type : String,
        require : [true, 'Name is require']
    },
    email: {
        type : String,
        unique : true,
        require : [true, 'Email is require']
    },
    password: {
        type : String,
        minlength : 6,
        require : [true, 'Password is require']
    },
    role: {
        type: String,
        required: [true, "Role is require"],
        enum: ["admin", "cashier"]
    },
    createdAt: {
        type : Date,
        default : Date.now()
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User