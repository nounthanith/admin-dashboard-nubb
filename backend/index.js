const { default: mongoose } = require("mongoose");
const app = require("./app");
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 5000
const DATABASE = process.env.DATABASE

mongoose.connect(`mongodb://localhost:27017/${DATABASE}`)
    .then(() => console.log("Connected success!"))
    .catch((error) => console.log(`Error:${error.message}`))

app.listen(PORT, () => {
    console.log(`Sever is running on port: http://localhost/${PORT}`)
})
