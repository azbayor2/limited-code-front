import { Button, PlaceHolder } from '../../components';
import module from './RegisterForm.module.css';

function RegisterForm() {
  return (
    <div className={module.body}>
      <div className={module.form}>
        <span className={module.titleText}>회원가입</span>
        <div className={module.innerform}>
          <PlaceHolder
            classname={module.placeHolder}
            text="아이디"
            disabled={false}
            error={false}
          />
          <PlaceHolder
            classname={module.placeHolder}
            text="비밀번호"
            hidden={true}
            disabled={false}
            error={false}
          />
          <div className={module.gap} />
          <PlaceHolder
            classname={module.placeHolder}
            text="비밀번호 다시 입력"
            disabled={false}
            hidden={true}
            error={false}
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
