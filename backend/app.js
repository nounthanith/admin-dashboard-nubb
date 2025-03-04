const express = require('express')
const { authRouter } = require('./src/routers/authRouter')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const frontendUrl = 'http://localhost:5173';

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser());

app.use(cors({
  origin: frontendUrl, 
  credentials: true,
}));

authRouter(app)

module.exports = app