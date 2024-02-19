const express = require("express");
const {
  getProductByURL,
  getProductByID,
  getProductDescription,
} = require("../controllers/product");
const router = express.Router();

router.post("/product/get-product-by-url", getProductByURL);
router.post("/product/get-product-by-id", getProductByID);
router.post("/product/get-product-description", getProductDescription);

module.exports = router;
