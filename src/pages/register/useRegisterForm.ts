import React, { useEffect, useState } from 'react';
import { userApi } from '../../api/user/userApi';
import { authApi } from '../../api/auth/authApi';
import type { SendVerificationCodeRequest } from '../../api/auth/authType';

type FormState = {
  usernameErrorState: boolean;
  passwordErrorState: boolean;
  repasswordErrorState: boolean;
  emailErrorState: boolean;
  emailCodeErrorState: boolean;
  emailSendButtonDisabledState: boolean;
  emailVerifyButtonDisabledState: boolean;
  registerButtonDisabledState: boolean;
};

type InputState = {
  username: string;
  email: string;
  password: string;
  verificationCode: string;
  emailverificationId: number | null;
};

export function useRegisterForm() {
  /** 회원가입 컴포넌트 관련 상태 */
  const [formState, setFormState] = useState<FormState>({
    usernameErrorState: false,
    passwordErrorState: false,
    repasswordErrorState: false,
    emailErrorState: false,
    emailCodeErrorState: false,
    emailSendButtonDisabledState: true,
    emailVerifyButtonDisabledState: true,
    registerButtonDisabledState: true,
  });

  /** 회원가입 관련 상태 */
  const [inputState, setInputData] = useState<InputState>({
    username: '',
    email: '',
    password: '',
    verificationCode: '',
    emailverificationId: null,
  });

  /** 아이디 입력했을 때 유효한지 확인 */
  const idInputHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputData((p) => ({ ...p, username: value }));
  };

  /** 아이디 입력칸 debouncing */
  useEffect(() => {
    if (inputState.username == '') return;

    const t = setTimeout(async () => {
      const result = await userApi.checkUserExists({
        username: inputState.username,
      });

      if (result) setFormState((p) => ({ ...p, usernameErrorState: true }));
      else setFormState((p) => ({ ...p, usernameErrorState: false }));
    }, 500);

    return () => {
      clearTimeout(t);
    };
  }, [inputState.username]);

  /** 비밀번호 입력했을 때 유효한지 확인 */
  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length < 8)
      setFormState((p) => ({ ...p, passwordErrorState: true }));
    else setFormState((p) => ({ ...p, passwordErrorState: false }));

    setInputData((prev) => ({ ...prev, password: value }));
  };

  /** 비밀번호 재입력 했을 때 같은지 확인 */
  const repasswordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // console.log(value);
    // console.log(password);

    if (value == inputState.password)
      setFormState((p) => ({ ...p, repasswordErrorState: false }));
    else setFormState((p) => ({ ...p, repasswordErrorState: true }));
  };

  /** 이메일 입력 검증 */
  const emailInputHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputData((p) => ({ ...p, email: value }));
  };

  /** 이메일이 존재하는지 검증하기 */
  useEffect(() => {
    if (inputState.email == '') return;

    const t = setTimeout(async () => {
      const result = await userApi.checkUserExists({ email: inputState.email });

      if (result) {
        setFormState((p) => ({
          ...p,
          emailErrorState: true,
          emailSendButtonDisabledState: true,
        }));
      } else
        setFormState((p) => ({
          ...p,
          emailErrorState: false,
          emailSendButtonDisabledState: false,
        }));
    }, 500);

    return () => {
      clearTimeout(t);
    };
  }, [inputState.email]);

  /** 이메일 인증번호 보내기 버튼 핸들러 */
  const emailAuthSendHandler = async () => {
    const result = await authApi.sendEmailAuthCode({
      email: inputState.email,
    } as SendVerificationCodeRequest);

    if (result) {
      setFormState((p) => ({
        ...p,
        emailSendButtonDisabledState: true,
        emailVerifyButtonDisabledState: false,
      }));
    }

    /** 알림 추가하기 */
  };

  const emailCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputData((p) => ({ ...p, verificationCode: value }));
  };

  /** 이메일 인증번호 검증 버튼 */
  const verifyEmailCodeHandler = async () => {
    const result = await authApi.verifyEmailAuthCode({
      email: inputState.email,
      code: inputState.verificationCode,
    });

    console.log(result);

    if (result.status) {
      setInputData((p) => ({
        ...p,
        emailverificationId: result.emailVerificationId,
      }));

      setFormState((p) => ({
        ...p,
        emailVerifyButtonDisabledState: true,
        registerButtonDisabledState: false,
      }));
    }
  };

  /** 회원가입 요청 */

  const registerButtonHandler = async () => {
    /** 입력값 유효성 검사 */
    /** 백엔드 요청 보내기 */
    /** 회원가입 완료 알려트 및 login으로 redirection */

    const result = await userApi.registerUser({
      email: inputState.email,
      username: inputState.username,
      password: inputState.password,
      emailVerificationId: inputState.emailverificationId as number,
    });

    if (result) {
      console.log('회원가입 성공!!');
    }
  };

  return {
    formState,
    idInputHandler,
    passwordInputHandler,
    repasswordInputHandler,
    emailInputHandler,
    emailAuthSendHandler,
    verifyEmailCodeHandler,
    registerButtonHandler,
    emailCodeInput,
  };
}
