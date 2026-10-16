import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export async function getApiStatus() {
  const response = await api.get('/health');
  return response.data;
}

export async function getDoctors(params = {}) {
  const response = await api.get('/doctors', { params });
  return response.data;
}