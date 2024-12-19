import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // Backend API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
