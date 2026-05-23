import styles from "./Test.module.css";
import {
  Header,
  MenuItem,
  NormalDivider,
  MenuCard,
  Sidebar,
  Footer,
  OAuthButton
} from "../../../components/index.tsx";

import { CategoryLists } from "./MockData.ts";

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
          selected={CategoryLists.find((c) => c.name === "Docker")?.id || null}
          title="category"
        />
        <Sidebar
          categories={CategoryLists}
          selected = {1}
          title="settings"/>
        <OAuthButton provider="Google" enabled={true} text="Google 계정으로 로그인"/>
        <OAuthButton provider="Google" enabled={false} text="Google 계정 연동 완료"/>

        
      </div>
      <Footer/>
    </div>
  );
}

export default Test;
