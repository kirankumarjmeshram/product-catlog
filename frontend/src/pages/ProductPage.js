import React, { useEffect, useState } from "react";
import axios from "axios";
import StoreSelector from "../components/StoreSelector";

const ProductPage = () => {
  const [storeId, setStoreId] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (storeId) {
      axios.get(`http://localhost:5000/api/products/${storeId}`).then((res) => setProducts(res.data));
    }
  }, [storeId]);

  return (
    <div>
      <StoreSelector onSelect={setStoreId} />
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.sku}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;