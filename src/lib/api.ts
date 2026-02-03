import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://api.amonarq.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor to add auth token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;