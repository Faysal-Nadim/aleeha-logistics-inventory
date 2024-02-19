const express = require("express");
const { getShippingRates } = require("../controllers/shipping");
const router = express.Router();

router.get("/shipping/rate-by-category", getShippingRates);

module.exports = router;
