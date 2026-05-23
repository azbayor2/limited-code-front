import styles from './Footer.module.css'
import githubIcon from '../../assets/icons/githubIcon.svg'
import linkedInIcon from '../../assets/icons/linkedin.svg'
import emailIcon from '../../assets/icons/email.svg'


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.footerText}>© 2026  Y Limited. All rights reserved.</span>
        <div className={styles.rightGroup}>
          <a href='https://github.com/azbayor2'>
            <img src={githubIcon} alt='github' className='icons'/>
          </a>

          <a href='https://linkedin.com'>
            <img src={linkedInIcon} alt='linkedin' className='icons'/>
          </a>

          <a href='hanhary2@gmail.com'>
            <img src={emailIcon} alt="email" className='icons'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;