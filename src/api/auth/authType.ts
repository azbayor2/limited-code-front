/** send email verification code api */
export type SendVerificationCodeRequest = {
  email: string;
};

export type SendVerificationCodeResponse = {
  success: boolean;
};

/** verify email verificaiton code api */
export type VerifyEmailAuthRequest = {
  email: string;
  code: string;
};

export type VerifyEmailAuthResponse = {
  emailVerificationId: number;
  status: boolean;
};
