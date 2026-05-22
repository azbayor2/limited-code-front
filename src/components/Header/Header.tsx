import styles from './Header.module.css';
import defaultAvatar from '../../assets/icons/defaultAvatar.svg';
import githubIcon from '../../assets/icons/githubIcon.svg';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.Inner}>
                <span className={styles.Logo}>Y LIMITED</span>
                <div className={styles.RightGroup}>
                    <Link to='/about' className={styles.Link}>About</Link>
                    <img src={githubIcon}/>
                </div>
            </div>
            <img src={defaultAvatar} alt="avatar"/>
        </div>
    )
}

export default Header;