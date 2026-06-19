import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { config } from '../config/config';

const apiInstance: AxiosInstance = axios.create({
  baseURL: config.api.baseURL,
  timeout: config.api.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default apiInstance;
