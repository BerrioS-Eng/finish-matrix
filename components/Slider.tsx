import styles from "./Slider.module.css"

export const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div className={styles.carousel__face}>
          
        </div>
        <div className={styles.carousel__face}>
          <span className={styles.span}>Revestimientos</span>
        </div>
        <div className={styles.carousel__face}>
         
        </div>
        <div className={styles.carousel__face}>
          
        </div>
        <div className={styles.carousel__face}>
          <span className={styles.span}>Recubrimientos</span>
        </div>
        <div className={styles.carousel__face}>
         
        </div>
        <div className={styles.carousel__face}>
          
        </div>
        <div className={styles.carousel__face}>
          <span className={styles.span}>Cerramientos</span>
        </div>
        <div className={styles.carousel__face}>
          
        </div>
      </div>
    </div>
  )
}
