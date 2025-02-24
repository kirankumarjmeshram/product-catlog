import React, { useState } from "react";
import StoreSelector from "../components/StoreSelector";
import ProductList from "../components/ProductList";

const stores = ["STORE001", "STORE002", "STORE003"];

const Home = () => {
  const [selectedStore, setSelectedStore] = useState("");

  return (
    <div>
      <h2>Welcome to Our Store</h2>
      <StoreSelector stores={stores} selectedStore={selectedStore} onSelect={setSelectedStore} />
      {selectedStore && <ProductList storeId={selectedStore} />}
    </div>
  );
};

export default Home;