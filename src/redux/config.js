import axios from 'axios';

export function customInterceptors() {
  const API = axios.create({ 
    baseURL: process.env.REACT_APP_BASE_URL,
  });
  API.interceptors.request.use((config) => {
    const authToken = localStorage.getItem('token');
    config.headers['auth-token'] = authToken;
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  });

  return API;
}