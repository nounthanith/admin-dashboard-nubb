const express = require("express");
const cors = require("cors");
const path = require("path");
const { categoryRouter } = require("./routers/categoryRouter");
const { authRouter } = require("./routers/authRouter");
const { saleRouter } = require("./routers/saleRouter");
const { productRouter } = require("./routers/productRouter");

const app = express();
const frontendUrl = "http://localhost:5173";

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(require('cookie-parser')());
app.use('/', express.static(path.join(__dirname, 'public')))

app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  })
);

authRouter(app);
categoryRouter(app);
productRouter(app)
saleRouter(app);

module.exports = app;
