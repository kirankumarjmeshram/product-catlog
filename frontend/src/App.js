import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
// import ProductList from "./components/ProductList";
import Products from "./pages/Products";

const App = () => (
  <Router>
    <Header />
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:storeId/:sku" element={<ProductDetails />} />

      </Routes>
    </div>

    <Footer />
  </Router>
);

export default App;
