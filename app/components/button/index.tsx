import styles from './button.module.css';

const Button = () => {
  return(
    <div className={styles.button}>
      <div className={styles.content}>
        Click Here
      </div>
      <div className={styles.disco} />
    </div>
  )
}

export default Button;