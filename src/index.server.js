const express = require("express");
const cors = require("cors");
const env = require("dotenv");

const app = express();

env.config();

const productRoute = require("./routes/product.js");

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use("/api/v1", productRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
