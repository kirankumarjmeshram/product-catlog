const express = require("express");
const cors = require("cors");
const storeRoutes = require("./routes/stores");
const productRoutes = require("./routes/products");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/stores", storeRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});