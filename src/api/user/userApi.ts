import apiInstance from '../axiosInstance';
import {
  type UserExistRequest,
  type UserExistResponse,
  type UserInfoRequest,
  type UserInfo,
  type UserInfoResponse,
  type UserRegisterRequest,
  type UserRegisterResponse,
} from './userType';

export const userApi = {
  /** 사용자 존재 유무 확인하는 API */
  checkUserExists: async (
    userExistRequest: UserExistRequest,
  ): Promise<boolean> => {
    const res = await apiInstance.get<UserExistResponse>('/user/exists', {
      params: userExistRequest,
    });

    return res.data.success;
  },

  /** 사용자 정보 확인하는 API */
  checkUserInfo: async (
    userInfoRequest: UserInfoRequest,
  ): Promise<UserInfo | null> => {
    const res = await apiInstance.get<UserInfoResponse>('/user', {
      params: userInfoRequest,
    });

    return res.data.userInfo ?? null;
  },

  /** 사용자 회원가입 요청하는 API */
  registerUser: async (
    userRegisterRequest: UserRegisterRequest,
  ): Promise<boolean> => {
    const res = await apiInstance.post<UserRegisterResponse>(
      '/user/register',
      userRegisterRequest,
    );

    return res.data.success;
  },
};
