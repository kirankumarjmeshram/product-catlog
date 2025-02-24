import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/products";

export const fetchProducts = async (storeId) => {
  const response = await axios.get(`${API_BASE_URL}/${storeId}`);
  return response.data;
};

export const fetchProductDetails = async (storeId, sku) => {
  const response = await axios.get(`${API_BASE_URL}/${storeId}/${sku}`);
  return response.data;
};