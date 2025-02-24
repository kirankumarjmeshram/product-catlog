import React, { useEffect, useState } from "react";
import axios from "axios";

const StoreSelector = ({ onSelect }) => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/stores").then((res) => setStores(res.data));
  }, []);

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select a Store</option>
      {stores.map((store) => (
        <option key={store.id} value={store.id}>{store.name}</option>
      ))}
    </select>
  );
};

export default StoreSelector;