/** get user exists */
export type UserExistRequest = {
  email?: string;
  username?: string;
};

export type UserExistResponse = {
  success: boolean;
};

/** get user info */
export type UserInfoRequest = {
  id?: number;
  email?: string;
  username?: string;
};

export type UserInfo = {
  id: number;
  username: string;
  email: string;
};

export type UserInfoResponse = {
  success: boolean;
  userInfo?: UserInfo;
};

/** post user register */
export type UserRegisterRequest = {
  email: string;
  password: string;
  emailVerificationId: number;
  username: string;
};

export type UserRegisterResponse = {
  success: boolean;
};
