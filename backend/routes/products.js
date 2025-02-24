const express = require("express");
const { getProducts } = require("../controllers/productController");
const router = express.Router();
router.get("/:storeId", getProducts);
module.exports = router;