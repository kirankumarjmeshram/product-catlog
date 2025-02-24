import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';


export const getStores = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stores`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching stores:", error);
        return [];
    }
};

export const getProducts = async (storeId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/${storeId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching products for ${storeId}:`, error);
        return [];
    }
};

export const getProductDetails = async (storeId, sku) => {
    const response = await axios.get(`${API_BASE_URL}/products/${storeId}/${sku}`);
    return response.data;
};

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching all products:", error);
        return [];
    }
};


