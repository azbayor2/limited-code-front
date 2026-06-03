import styles from './Test.module.css';
import {
  Header,
  MenuItem,
  NormalDivider,
  MenuCard,
  Sidebar,
  Footer,
  OAuthButton,
  PlaceHolder,
  DividerWithText,
} from '../../../components/index.tsx';

import { CategoryLists } from './MockData.ts';
import RegisterForm from '../../register/RegisterForm.tsx';

function Test() {
  return (
    <div className={styles.Test}>
      <Header />
      {/**
       * div에 컴포넌트들 나열
       */}
      <div className={styles.body}>
        <MenuItem state="default">NestJS</MenuItem>
        <MenuItem state="active">NestJS</MenuItem>
        <NormalDivider />
        <MenuCard
          categories={CategoryLists}
          selected={CategoryLists.find((c) => c.name === 'Docker')?.id || null}
          title="category"
        />
        <Sidebar categories={CategoryLists} selected={1} title="settings" />
        <OAuthButton
          provider="Google"
          enabled={true}
          text="Google 계정으로 로그인"
        />
        <OAuthButton
          provider="Google"
          enabled={false}
          text="Google 계정 연동 완료"
        />
        <PlaceHolder text="default" disabled={false} error={false} />
        <PlaceHolder text="disabled" disabled={true} error={false} />
        <PlaceHolder text="error" disabled={false} error={true} />
        <DividerWithText text="또는" />
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
}

export default Test;
