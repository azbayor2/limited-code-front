import apiInstance from '../axiosInstance';
import { type LoginRequest } from './loginType';

const loginApi = {
  login: async (loginRequest: LoginRequest) => {
    const result = await apiInstance.post('/login', loginRequest);

    return;
  },
};

export default loginApi;
