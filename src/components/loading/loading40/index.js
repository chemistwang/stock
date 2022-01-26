import { Card } from 'antd';
import styles from './Loading.module.scss'

const { Meta } =  Card;



export default function Loading(){
    return (
        <Card
        hoverable
        >
         <section className={styles.bg}>
    <div className={`${styles.loader} ${styles["loader-18"]}`}>
      <div className={`${styles["css-star"]} ${styles.star1}`}></div>
      <div className={`${styles["css-star"]} ${styles.star2}`}></div>
      <div className={`${styles["css-star"]} ${styles.star3}`}></div>
      <div className={`${styles["css-star"]} ${styles.star4}`}></div>
      <div className={`${styles["css-star"]} ${styles.star5}`}></div>
      <div className={`${styles["css-star"]} ${styles.star6}`}></div>
      <div className={`${styles["css-star"]} ${styles.star7}`}></div>
      <div className={`${styles["css-star"]} ${styles.star8}`}></div>
    </div>
  </section>
        <Meta title="Heart Loading" description="www.instagram.com" />
        </Card>
    )
}
