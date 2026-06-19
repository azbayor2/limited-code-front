import { useState } from 'react';
import loginApi from '../../api/login/loginApi';
import type { LoginRequest } from '../../api/login/loginType';

type LoginFormState = {
  usernamePlaceHolderErrorState: boolean;
  passwordPlaceHolderErrorState: boolean;
  loginButtonDisabledState: boolean;
  oAuthButtonDisabledState: boolean;
};

type LoginInputState = {
  username: string;
  password: string;
};

export default function useLoginForm() {
  const [loginFormState, setLoginFormState] = useState<LoginFormState>({
    usernamePlaceHolderErrorState: false,
    passwordPlaceHolderErrorState: false,
    loginButtonDisabledState: false,
    oAuthButtonDisabledState: true,
  });

  const [loginInputState, setLoginInputState] = useState<LoginInputState>({
    username: '',
    password: '',
  });

  /** 아이디 인풋 핸들러 */
  const usernameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setLoginInputState((p) => ({ ...p, username: value }));
  };

  /** 비밀번호 인풋 핸들러 */
  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setLoginInputState((p) => ({ ...p, password: value }));
  };

  /** 로그인 핸들러 */
  const loginButtonClickHandler = async () => {
    try {
      const result = await loginApi.login({
        username: loginInputState.username,
        password: loginInputState.password,
      } as LoginRequest);

      return;
    } catch (e) {
      setLoginFormState((p) => ({ ...p, passwordPlaceHolderErrorState: true }));

      /** 팝업 알림 구현하기 */
    }
  };

  /** 비밀번호 탭에서 엔터 누를 때 */
  const onPasswordEnterHandler = async (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key != 'Enter') return;
    console.log('enter pressed');
    if (loginInputState.password.length < 8) {
      setLoginFormState((p) => ({ ...p, passwordPlaceHolderErrorState: true }));
      return;
    }

    try {
      const result = await loginApi.login({
        username: loginInputState.username,
        password: loginInputState.password,
      } as LoginRequest);

      return;
    } catch (ex) {
      setLoginFormState((p) => ({ ...p, passwordPlaceHolderErrorState: true }));

      /** 팝업 알림 구현하기 */
    }
  };

  return {
    loginFormState,
    loginInputState,
    usernameInputHandler,
    passwordInputHandler,
    loginButtonClickHandler,
    onPasswordEnterHandler,
  };
}
