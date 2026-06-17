import { useState } from 'react';
import { Button, PlaceHolder } from '../../components';
import module from './RegisterForm.module.css';
import { userApi } from '../../api/user/userApi';
import type { UserExistRequest } from '../../api/user/userType';

function RegisterForm() {
  /** 아이디 관련 상태 */
  const [idPlaceHolderErrorState, setIdPlaceHolderErrorState] = useState(false);

  /** 비밀번호 관련 상태 */
  const [passwordState, setPasswordState] = useState(false);

  /** 비밀번호 재입력 관련 상태 */
  const [repasswordState, setRepasswordState] = useState(false);

  /** 이메일 관련 상태 */
  const [emailState, setEmailState] = useState(false);

  /** 이메일 인증번호 관련 상태 */
  const [emailCodeState, setEmailCodeState] = useState(false);

  /** 회원가입 관련 상태 */
  const [{ id, email, password, verificationCode }, setData] = useState({});

  /** 아이디 입력했을 때 유효한지 확인 */
  const idInputHandler = async (e) => {
    const { name, value } = e.target;

    const existState = await userApi.checkUserExists({
      username: value,
    } as UserExistRequest);

    console.log(existState);

    if (existState) setIdPlaceHolderErrorState(false);
    else setIdPlaceHolderErrorState(true);
  };

  /** 비밀번호 입력했을 때 유효한지 확인 */
  const passwordInputHandler = (e) => {
    const { name, value } = e.target;
    if (value.length < 8) setPasswordState(true);
    else setPasswordState(false);
    setData((prev) => ({ ...prev, password: value }));
  };

  /** 비밀번호 재입력 했을 때 같은지 확인 */
  const repasswordInputHandler = (e) => {
    const { name, value } = e.target;
    console.log(value);
    console.log(password);

    if (value == password) setRepasswordState(false);
    else setRepasswordState(true);
  };

  /** 이메일 입력 검증 */

  /** 이메일 인증번호 검증 */

  /** 회원가입 요청 */

  return (
    <div className={module.body}>
      <div className={module.form}>
        <span className={module.titleText}>회원가입</span>
        <div className={module.innerform}>
          <PlaceHolder
            classname={module.placeHolder}
            text="아이디"
            disabled={false}
            error={idPlaceHolderErrorState}
            onChange={idInputHandler}
          />
          <PlaceHolder
            classname={module.placeHolder}
            text="비밀번호"
            hidden={true}
            disabled={false}
            error={passwordState}
            onChange={passwordInputHandler}
          />
          <div className={module.gap} />
          <PlaceHolder
            classname={module.placeHolder}
            text="비밀번호 다시 입력"
            disabled={false}
            hidden={true}
            error={repasswordState}
            onChange={repasswordInputHandler}
          />
          <div className={module.gap2} />

          <div className={module.area}>
            <PlaceHolder text="이메일" disabled={false} error={false} />
            <Button
              classname={module.button}
              variant="primary"
              size="small"
              disabled={false}
            >
              인증 요청
            </Button>
          </div>

          <div className={module.area}>
            <PlaceHolder text="인증번호" disabled={false} error={false} />
            <Button
              classname={module.button}
              variant="primary"
              size="small"
              disabled={true}
            >
              인증확인
            </Button>
          </div>
        </div>

        <Button
          classname={module.button}
          variant="primary"
          size="large"
          disabled={true}
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
