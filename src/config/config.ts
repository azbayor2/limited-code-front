export const config = {
  api: {
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    timeout: Number(import.meta.env.VITE_TIMEOUT_MS) || 5000,
  },
};
