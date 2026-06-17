import apiInstance from '../axiosInstance';
import {
  type SendVerificationCodeResponse,
  type SendVerificationCodeRequest,
  type VerifyEmailAuthRequest,
  type VerifyEmailAuthResponse,
} from './authType';

export const authApi = {
  /** 이메일 인증번호 보내기 API */
  sendEmailAuthCode: async (
    sendVerificationCodeRequest: SendVerificationCodeRequest,
  ): Promise<boolean> => {
    const res = await apiInstance.post<SendVerificationCodeResponse>(
      '/auth/send',
      sendVerificationCodeRequest,
    );

    return res.data.success;
  },

  /** 이메일 인증번호 검증 API */
  verifyEmailAuthCode: async (
    verifyEmailAuthRequest: VerifyEmailAuthRequest,
  ): Promise<VerifyEmailAuthResponse> => {
    const res = await apiInstance.post<VerifyEmailAuthResponse>(
      '/auth/verify',
      verifyEmailAuthRequest,
    );

    return res.data;
  },
};
