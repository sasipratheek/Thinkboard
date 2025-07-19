// src/lib/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true, // ✅ important
});

export default api;
