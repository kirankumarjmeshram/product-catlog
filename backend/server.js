const express = require("express");
const cors = require("cors");
const storeRoutes = require("./routes/stores");
const productRoutes = require("./routes/products");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server running");
});
app.use("/api/stores", storeRoutes);
app.use("/api/products", productRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
