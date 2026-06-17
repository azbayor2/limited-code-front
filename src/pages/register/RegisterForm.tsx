import { useState } from 'react';
import { Button, PlaceHolder } from '../../components';
import module from './RegisterForm.module.css';
import { userApi } from '../../api/user/userApi';
import type { UserExistRequest } from '../../api/user/userType';
import { authApi } from '../../api/auth/authApi';
import type {
  SendVerificationCodeRequest,
  VerifyEmailAuthRequest,
} from '../../api/auth/authType';

type FormState = {
  idPlaceHolderErrorState: boolean;
  passwordState: boolean;
  repasswordState: boolean;
  emailState: boolean;
  emailCodeState: boolean;
  emailSendButtonState: boolean;
  emailVerifyButtonState: boolean;
  registerButtonState: boolean;
};

type InputState = {
  id: string;
  email: string;
  password: string;
  verificationCode: string;
  emailverificationId: number | null;
};

function RegisterForm() {
  /** 회원가입 컴포넌트 관련 상태 */
  const [formState, setFormState] = useState<FormState>({
    idPlaceHolderErrorState: false,
    passwordState: false,
    repasswordState: false,
    emailState: false,
    emailCodeState: false,
    emailSendButtonState: false,
    emailVerifyButtonState: false,
    registerButtonState: false,
  });

  /** 회원가입 관련 상태 */
  const [inputState, setInputData] = useState<InputState>({
    id: '',
    email: '',
    password: '',
    verificationCode: '',
    emailverificationId: null,
  });

  /** 아이디 입력했을 때 유효한지 확인 */
  const idInputHandler = async (e) => {
    const { name, value } = e.target;

    const existState = await userApi.checkUserExists({
      username: value,
    } as UserExistRequest);

    // console.log(existState);

    if (existState)
      setFormState((p) => ({ ...p, idPlaceHolderErrorState: true }));
    else setFormState((p) => ({ ...p, idPlaceHolderErrorState: false }));

    setInputData((p) => ({ ...p, id: value }));
  };

  /** 비밀번호 입력했을 때 유효한지 확인 */
  const passwordInputHandler = (e) => {
    const { name, value } = e.target;
    if (value.length < 8) setFormState((p) => ({ ...p, passwordState: true }));
    else setFormState((p) => ({ ...p, passwordState: true }));

    setInputData((prev) => ({ ...prev, password: value }));
  };

  /** 비밀번호 재입력 했을 때 같은지 확인 */
  const repasswordInputHandler = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    // console.log(password);

    if (value == inputState.password)
      setFormState((p) => ({ ...p, repasswordState: false }));
    else setFormState((p) => ({ ...p, repasswordState: true }));
  };

  /** 이메일 입력 검증 */
  const emailInputHandler = async (e) => {
    const { name, value } = e.target;

    const userExists = await userApi.checkUserExists({
      email: value,
    } as UserExistRequest);

    if (userExists) setEmailState(true);
    else setEmailState(false);

    setInputData((p) => ({ ...p, email: value }));
  };

  /** 이메일 인증번호 보내기 버튼 핸들러 */
  const emailAuthSendHandler = async (e) => {
    const { name, value } = e.target;

    /** 이메일 형식이 저장되어 있는지 확인하기 */

    const result = await authApi.sendEmailAuthCode({
      email: inputState.email,
    } as SendVerificationCodeRequest);
    /** 전송이 성공적으로 되었을 때 추가 처리하기 */
  };

  /** 이메일 인증번호 검증 */

  const emailVerificationHandler = async (e) => {
    const { name, value } = e.target;

    const isValidCode = await authApi.verifyEmailAuthCode({
      email: inputState.email,
      code: inputState.verificationCode,
    } as VerifyEmailAuthRequest);

    /** 인증번호가 맞을 때 처리하기 */
    if (isValidCode.status) {
      setInputData((p) => ({
        ...p,
        emailverificationId: isValidCode.emailVerificationId,
      }));
    }
  };

  /** 회원가입 요청 */

  return (
    <div className={module.body}>
      <div className={module.form}>
        <span className={module.titleText}>회원가입</span>
        <div className={module.innerform}>
          {/** 아이디 입력 칸 */}
          <PlaceHolder
            classname={module.placeHolder}
            text="아이디"
            disabled={false}
            error={formState.idPlaceHolderErrorState}
            onChange={idInputHandler}
          />
          {/** 비밀번호 입력 칸 */}
          <PlaceHolder
            classname={module.placeHolder}
            text="비밀번호"
            hidden={true}
            disabled={false}
            error={formState.passwordState}
            onChange={passwordInputHandler}
          />
          <div className={module.gap} />
          {/** 비밀번호 재입력 칸 */}
          <PlaceHolder
            classname={module.placeHolder}
            text="비밀번호 다시 입력"
            disabled={false}
            hidden={true}
            error={formState.repasswordState}
            onChange={repasswordInputHandler}
          />
          <div className={module.gap2} />

          <div className={module.area}>
            {/** 이메일 입력 칸 */}
            <PlaceHolder
              text="이메일"
              disabled={false}
              error={formState.emailState}
              onChange={emailInputHandler}
            />
            {/** 이메일 인증번호 버튼 */}
            <Button
              classname={module.button}
              variant="primary"
              size="small"
              disabled={formState.emailSendButtonState}
              onClick={emailAuthSendHandler}
            >
              인증 요청
            </Button>
          </div>

          <div className={module.area}>
            {/** 인증번호 입력 칸 */}
            <PlaceHolder
              text="인증번호"
              disabled={false}
              error={formState.emailVerifyButtonState}
            />
            {/** 인증번호 검증 버튼*/}
            <Button
              classname={module.button}
              variant="primary"
              size="small"
              disabled={formState.emailVerifyButtonState}
              onClick={emailVerificationHandler}
            >
              인증확인
            </Button>
          </div>
        </div>
        {/** 회원가입 버튼 */}
        <Button
          classname={module.button}
          variant="primary"
          size="large"
          disabled={formState.registerButtonState}
          onClick={null}
        >
          회원가입
        </Button>

        <span className={module.text}>
          OAuth는 회원가입 후 연동할 수 있습니다.
        </span>
      </div>
    </div>
  );
}

export default RegisterForm;
