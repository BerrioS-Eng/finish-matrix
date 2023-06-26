import Image from "next/image"
import styles from "./Slider.module.css"

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <div className={styles.carousel__item}>
            <Image src={"/acabado1.jpg"} alt="" width={0} height={0} />
          </div>
          <div className={styles.carousel__item}>
            <span className={styles.span}>Revestimientos</span>
          </div>
          <div className={styles.carousel__item}>
            <Image src={"/acabado2.jpg"} alt="" width={0} height={0} />
          </div>
          <div className={styles.carousel__item}>
            <Image src={"/acabado4.jpg"} alt="" width={0} height={0} />
          </div>
          <div className={styles.carousel__item}>
            <span className={styles.span}>Recubrimientos</span>
          </div>
          <div className={styles.carousel__item}>
            <Image src={"/acabado6.jpg"} alt="" width={0} height={0} />
          </div>
          <div className={styles.carousel__item}>
            <Image src={"/acabado7.jpg"} alt="" width={0} height={0} />
          </div>
          <div className={styles.carousel__item}>
            <span className={styles.span}>Cerramientos</span>
          </div>
          <div className={styles.carousel__item}>
            <Image src={"/acabado19.jpg"} alt="" width={0} height={0} />
          </div>
        </div>
      </div>
    </div>
  )
}
