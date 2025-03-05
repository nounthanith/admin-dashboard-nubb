const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const { categoryRouter } = require("./src/routers/categoryRouter");
const { authRouter } = require("./src/routers/authRouter");
const { productRouter } = require("./src/routers/productRouter")
const { saleRouter } = require("./src/routers/saleRouter")

const app = express();
const frontendUrl = "http://localhost:5173";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  })
);

authRouter(app);
categoryRouter(app);
productRouter(app);
saleRouter(app);

module.exports = app;
