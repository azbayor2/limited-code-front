import styles from "./Test.module.css";
import {
  Header,
  MenuItem,
  NormalDivider,
  MenuCard,
} from "../../../components/index.tsx";

import { CategoryLists } from "./MockData.ts";

function Test() {
  return (
    <div className={styles.Test}>
      <Header />
      <MenuItem state="default">NestJS</MenuItem>
      <MenuItem state="active">NestJS</MenuItem>
      <NormalDivider />
      <MenuCard
        categories={CategoryLists}
        selected={CategoryLists.find((c) => c.name === "Docker") || null}
      />
    </div>
  );
}

export default Test;
