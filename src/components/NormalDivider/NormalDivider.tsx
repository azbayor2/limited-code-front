import styles from "./NormalDivider.module.css";

function NormalDivider() {
  return (
    <div className={styles.divider}>
      <div className={styles.line} />
    </div>
  );
}

export default NormalDivider;
