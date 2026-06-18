import { Button, PlaceHolder } from '../../components';
import module from './RegisterForm.module.css';

import { useRegisterForm } from './useRegisterForm';

function RegisterForm() {
  const {
    formState,
    idInputHandler,
    emailAuthSendHandler,
    emailInputHandler,
    passwordInputHandler,
    registerButtonHandler,
    repasswordInputHandler,
    verifyEmailCodeHandler,
    emailCodeInput,
  } = useRegisterForm();

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
            error={formState.usernameErrorState}
            onChange={idInputHandler}
          />
          {/** 비밀번호 입력 칸 */}
          <PlaceHolder
            classname={module.placeHolder}
            text="비밀번호"
            hidden={true}
            disabled={false}
            error={formState.passwordErrorState}
            onChange={passwordInputHandler}
          />
          <div className={module.gap} />
          {/** 비밀번호 재입력 칸 */}
          <PlaceHolder
            classname={module.placeHolder}
            text="비밀번호 다시 입력"
            disabled={false}
            hidden={true}
            error={formState.repasswordErrorState}
            onChange={repasswordInputHandler}
          />
          <div className={module.gap2} />

          <div className={module.area}>
            {/** 이메일 입력 칸 */}
            <PlaceHolder
              text="이메일"
              disabled={false}
              error={formState.emailErrorState}
              onChange={emailInputHandler}
            />
            {/** 이메일 인증번호 버튼 */}
            <Button
              classname={module.button}
              variant="primary"
              size="small"
              disabled={formState.emailSendButtonDisabledState}
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
              error={formState.emailCodeErrorState}
              onChange={emailCodeInput}
            />
            {/** 인증번호 검증 버튼*/}
            <Button
              classname={module.button}
              variant="primary"
              size="small"
              disabled={formState.emailVerifyButtonDisabledState}
              onClick={verifyEmailCodeHandler}
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
          disabled={formState.registerButtonDisabledState}
          onClick={registerButtonHandler}
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
