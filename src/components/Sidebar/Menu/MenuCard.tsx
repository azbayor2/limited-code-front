import type { Category } from "../../../types/Category";
import NormalDivider from "../../NormalDivider/NormalDivider";
import styles from "./MenuCard.module.css";
import MenuItem from "./MenuItem/MenuItem";

type MenuCardProps = {
  categories?: Category[] | null;
  selected: Category | null;
};

function MenuCard({ categories = null, selected = null }: MenuCardProps) {
  return (
    <div className={styles.menuCard}>
      <div className={styles.header}>
        <span className={styles.title}>Category</span>
        <NormalDivider />
      </div>
      <div className={styles.menuList}>
        {categories?.map((c) => (
          <MenuItem
            state={c.id === selected?.id ? "active" : "default"}
            to={c?.uri}
            key={c.id}
          >
            {c.name}
          </MenuItem>
        ))}
      </div>
    </div>
  );
}

export default MenuCard;
