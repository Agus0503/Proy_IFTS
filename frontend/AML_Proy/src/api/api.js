import axios from "axios";
import { ACCESS_TOKEN } from "../constants";


const api = axios.create({
  baseURL: "http://localhost:8000", // Cambia esto según tu backend
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;