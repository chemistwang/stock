import { Card } from 'antd';
import styles from './Loading.module.scss'

const { Meta } =  Card;



export default function Loading(){
    return (
        <Card
        hoverable
        >
  <section className={styles.bg}>
    <div className={`${styles.loader} ${styles["loader-17"]}`}>
      <div className={`${styles["css-square"]} ${styles.square1}`}></div>
      <div className={`${styles["css-square"]} ${styles.square2}`}></div>
      <div className={`${styles["css-square"]} ${styles.square3}`}></div>
      <div className={`${styles["css-square"]} ${styles.square4}`}></div>
      <div className={`${styles["css-square"]} ${styles.square5}`}></div>
      <div className={`${styles["css-square"]} ${styles.square6}`}></div>
      <div className={`${styles["css-square"]} ${styles.square7}`}></div>
      <div className={`${styles["css-square"]} ${styles.square8}`}></div>
    </div>
  </section>

        <Meta title="Heart Loading" description="www.instagram.com" />
        </Card>
    )
}
