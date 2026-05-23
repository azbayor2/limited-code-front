import styles from "./Header.module.css";
import defaultAvatar from "../../assets/icons/defaultAvatar.svg";
import githubIcon from "../../assets/icons/githubIcon.svg";
import { Link } from "react-router-dom";

type HeaderProps = {
  loggedIn?: boolean;
  // user?: User;
};

function Header({ loggedIn = false }: HeaderProps) {
  return (
    <div className={styles.Header}>
      <div className={styles.Inner}>
        <Link to="/home" className={styles.Logo}>
          Y LIMITED
        </Link>
        <div className={styles.RightGroup}>
          <Link to="/about" className={styles.Link}>
            About
          </Link>
          <a href="https://www.github.com/azbayor2" target="_blank">
            <img src={githubIcon} alt="github" className={styles.github} />
          </a>
        </div>
      </div>
      <Link to={loggedIn ? "/settings/user" : "/login"}>
        <img src={defaultAvatar} alt="avatar" className={styles.avatar} />
      </Link>
    </div>
  );
}

export default Header;
