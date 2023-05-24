import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Function to handle token deletion
export const deleteToken = () => {
  localStorage.removeItem("token");
};

// Function to handle token storage
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

const API = axios.create({
  baseURL: "http://192.168.100.141:3000/v1",
});

// Request interceptor
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
API.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Unauthorized error, delete token
      deleteToken();
    }

    return Promise.reject(error);
  }
);

export default API;
