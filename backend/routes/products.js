const express = require("express");
const { getAllProducts, getProducts, getProductDetails } = require("../controllers/productController");
const router = express.Router();

router.get("/", getAllProducts); // Get all products
router.get("/:storeId", getProducts);
router.get("/:storeId/:sku", getProductDetails);

module.exports = router;
