import React from "react";
import { Form } from "react-bootstrap";

const StoreSelector = ({ stores, selectedStore, onSelect }) => {
  return (
    <Form.Select value={selectedStore} onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select Store</option>
      {stores.map((store) => (
        <option key={store} value={store}>{store}</option>
      ))}
    </Form.Select>
  );
};

export default StoreSelector;