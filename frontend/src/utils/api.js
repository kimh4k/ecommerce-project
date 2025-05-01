import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  resetPassword: (email) => api.post('/auth/reset-password', { email }),
};

// User API
export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data) => api.put('/users/profile', data),
  changePassword: (data) => api.put('/users/change-password', data),
};

// Product API
export const productAPI = {
  getAll: () => api.get('/products'),
  getById: (id) => api.get(`/products/${id}`),
  search: (query) => api.get(`/products/search?q=${query}`),
};

// Cart API
export const cartAPI = {
  getCart: () => api.get('/cart'),
  addToCart: (productId, quantity) => api.post('/cart', { productId, quantity }),
  updateCart: (productId, quantity) => api.put(`/cart/${productId}`, { quantity }),
  removeFromCart: (productId) => api.delete(`/cart/${productId}`),
};

// Order API
export const orderAPI = {
  create: (data) => api.post('/orders', data),
  getAll: () => api.get('/orders'),
  getById: (id) => api.get(`/orders/${id}`),
  updateStatus: (id, status) => api.put(`/orders/${id}/status`, { status }),
}; 