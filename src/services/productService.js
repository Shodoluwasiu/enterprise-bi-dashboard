//Creating API Services

import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getProducts = async () => {
  const response = await API.get("/products?limit=20");
  return response.data.products;
};