const express = require("express");
const { getProducts, getProductDetails } = require("../controllers/productController");
const router = express.Router();

router.get("/:storeId", getProducts);
router.get("/:storeId/:sku", getProductDetails);

module.exports = router;
