import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.33:3001',
});

export default api;
