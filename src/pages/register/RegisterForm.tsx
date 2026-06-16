import { useState } from 'react';
import { Button, PlaceHolder } from '../../components';
import module from './RegisterForm.module.css';

function RegisterForm() {
  const [idPlaceHolderErrorState, setIdPlaceHolderErrorState] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  const [repasswordState, setRepasswordState] = useState(false);
  const [{ id, email, password, verificationCode }, dummy] = useState({});

  const idInputHandler = (e) => {
    const { name, value } = e.target;
    if (value != 'hanharry2') setIdPlaceHolderErrorState(true);
    else setIdPlaceHolderErrorState(false);
  };

  const passwordInputHandler = (e) => {
    const { name, value } = e.target;
    if (value.length < 8) setPasswordState(true);
    else setPasswordState(false);
    dummy((prev) => ({ ...prev, password: value }));
  };

  const repasswordInputHandler = (e) => {
    const { name, value } = e.target;
    console.log(value);
    console.log(password);

    if (value == password) setRepasswordState(false);
    else setRepasswordState(true);
  };

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
