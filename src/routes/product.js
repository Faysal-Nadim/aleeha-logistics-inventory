const express = require("express");
const { getProductByURL, AWSTranslation } = require("../controllers/product");
const router = express.Router();

router.get("/get-product-by-url", getProductByURL);

module.exports = router;
