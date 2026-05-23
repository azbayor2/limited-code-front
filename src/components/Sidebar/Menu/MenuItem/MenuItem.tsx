import styles from "./MenuItem.module.css";
import { Link } from "react-router-dom";

type MenuItemProps = {
  state?: "default" | "active";
  children: React.ReactNode;
  to?: string;
};

function MenuItem({ state = "default", children, to = "/" }: MenuItemProps) {
  const className = `${styles.MenuItem} ${styles[state]}`;

  const ActiveBar = () => {
    return <div className={styles.activeBar} />;
  };

  return (
    <Link to={to} className={className}>
      {state == "active" ? <ActiveBar /> : null}# {children}
    </Link>
  );
}

export default MenuItem;
