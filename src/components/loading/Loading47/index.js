import { Card } from "antd";
import styles from "./Loading.module.scss";

const { Meta } = Card;

export default function Loading() {
  return (
    <Card hoverable>
     <section className={styles.bg}>
    <div className={`${styles.loader} ${styles["loader-3"]}`}>
      <div className={`${styles.dot} ${styles.dot1}`}></div>
      <div className={`${styles.dot} ${styles.dot2}`}></div>
      <div className={`${styles.dot} ${styles.dot3}`}></div>
    </div>
  </section>
      <Meta title="Heart Loading" description="www.instagram.com" />
    </Card>
  );
}
