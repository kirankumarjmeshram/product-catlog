import React, { useState } from "react";
import StoreSelector from "../components/StoreSelector";
import ProductList from "../components/ProductList";
import Products from "./Products";

const Home = () => {
  const [selectedStore, setSelectedStore] = useState(null);

  const handleStoreChange = (storeId) => {
    console.log("Selected Store:", storeId);
    setSelectedStore(storeId);
  };

  return (
    <div>
      <h2>Select a Store</h2>
      <StoreSelector onStoreChange={handleStoreChange} />
      {selectedStore && <ProductList storeId={selectedStore} />}
      {!selectedStore && <Products />}
    </div>
  );
};

export default Home;
