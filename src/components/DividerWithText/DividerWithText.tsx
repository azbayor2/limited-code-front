import styles from './DividerWithText.module.css'


type DividerWithTextProps = {
  text: string
};



function DividerWithText({text}: DividerWithTextProps) {
  return (
    <div className={styles.divider}>
      <div className={styles.line}/>
      <span className={styles.text}>{text}</span>
      <div className={styles.line}/>
    
    </div>
  )
}


export default DividerWithText;