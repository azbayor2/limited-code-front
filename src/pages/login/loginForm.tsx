import {
  DividerWithText,
  OAuthButton,
  PlaceHolder,
  Button,
  Link,
} from '../../components';

import useLoginForm from './useLoginForm';
import module from './LoginForm.module.css';

function LoginForm() {
  const {
    passwordInputHandler,
    loginButtonClickHandler,
    usernameInputHandler,
    onPasswordEnterHandler,
    loginFormState,
  } = useLoginForm();

  return (
    <div className={module.pageLayout}>
      <div className={module.formLayout}>
        <span className={module.loginText}>로그인</span>
        <div className={module.inputFormLayout}>
          <PlaceHolder
            text="아이디"
            disabled={false}
            error={loginFormState.usernamePlaceHolderErrorState}
            onChange={usernameInputHandler}
          />
          <PlaceHolder
            text="비밀번호"
            disabled={false}
            error={loginFormState.passwordPlaceHolderErrorState}
            onChange={passwordInputHandler}
            hidden={true}
            onKeyDown={onPasswordEnterHandler}
          />
        </div>
        <Button
          children="로그인"
          classname={module.loginButton}
          size="large"
          variant="primary"
          onClick={loginButtonClickHandler}
        />
        <DividerWithText text="또는" />
        <OAuthButton
          provider="Google"
          text="Google 계정으로 로그인"
          enabled={loginFormState.oAuthButtonDisabledState}
        />
        <div className={module.linkRow}>
          <Link name="회원가입" href="/register" />
          <span>·</span>
          <Link name="아이디 찾기" href="/" />
          <span>·</span>
          <Link name="비밀번호 재설정" href="/" />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
