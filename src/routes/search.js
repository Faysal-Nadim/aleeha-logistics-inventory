const express = require("express");
const { getProductsByKeyword } = require("../controllers/search");
const router = express.Router();

router.get("/search/keyword", getProductsByKeyword);

module.exports = router;
