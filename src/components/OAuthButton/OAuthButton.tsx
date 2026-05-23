import styles from './OAuthButton.module.css'
import googleIcon from '../../assets/icons/GoogleIcon.svg'



type OAuthButtonProps = {
  provider: string;
  enabled: boolean;
  text: string;
}


const providers = [
  {
    provider: "Google",
    href: googleIcon,
    url: "https://google.com" // 수정 필요
  }
]

function OAuthButton({provider, enabled=true, text}: OAuthButtonProps) {
  const currentProvider = providers.find((p)=> p.provider===provider);
  
  const handleButtonClick = () => {
    window.location.href = currentProvider?.url ?? "";
  }
  
  return (
    <button 
      onClick={handleButtonClick}
      className={styles.oAuthButton} disabled={enabled ? false: true} >
        <img src={providers.find((p)=> p?.provider===provider)?.href}
         className={styles.icon} alt={provider}/>
        <span className={styles.text}>{text}</span>
    </button>
  )
}


export default OAuthButton;