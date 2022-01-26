import { Card } from "antd";
import styles from "./Loading.module.scss";

const { Meta } = Card;

export default function Loading() {
  return (
    <Card hoverable>
        <section className={styles.bg}>
    <div className={`${styles.loader} ${styles["loader-13"]}`}>
      <div className={`${styles["css-heart"]} ${styles.heart1}`}></div>
      <div className={`${styles["css-heart"]} ${styles.heart2}`}></div>
      <div className={`${styles["css-heart"]} ${styles.heart3}`}></div>
      <div className={`${styles["css-heart"]} ${styles.heart4}`}></div>
    </div>
  </section>
      <Meta title="Heart Loading" description="www.instagram.com" />
    </Card>
  );
}
