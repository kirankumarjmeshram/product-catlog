import React, { useEffect, useState } from "react";
import axios from "axios";

const StoreSelector = ({ onStoreChange }) => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/stores") // Ensure backend has this endpoint
      .then(response => {
        setStores(response.data); 
      })
      .catch(error => console.error("Error fetching stores:", error));
  }, []);

  return (
    <select onChange={(e) => onStoreChange(e.target.value)} className="form-select">
      <option value="">Select a Store</option>
      {stores.map(store => (
        <option key={store.storeId} value={store.storeId}>
          {store.name} ({store.storeId})
        </option>
      ))}
    </select>
  );
};

export default StoreSelector;
