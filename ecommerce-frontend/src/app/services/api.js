import axios from 'axios';

// Inisialisasi instance axios dengan base URL
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api', // Sesuaikan URL backend Anda
  headers: {
    'Content-Type': 'application/json',
  },
});

// Tambahkan interceptor jika Anda membutuhkan autentikasi atau logging
api.interceptors.request.use(
  (config) => {
    // Misalnya, tambahkan token ke header jika sudah ada
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Contoh fungsi untuk mengambil data produk
export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

// Contoh fungsi untuk mengambil data pengguna
export const fetchUser = async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

export default api;
