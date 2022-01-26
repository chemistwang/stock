import { Card } from "antd";
import styles from "./Loading.module.scss";

const { Meta } = Card;

export default function Loading() {
  return (
    <Card hoverable >
      <div className={styles.bg}>
        <div className={`${styles.loader} ${styles["loader-21"]}`}>
          <div className={`${styles["css-times"]} ${styles.times1}`}></div>
          <div className={`${styles["css-times"]} ${styles.times2}`}></div>
          <div className={`${styles["css-times"]} ${styles.times3}`}></div>
        </div>
      </div>
      <Meta title="Heart Loading" description="www.instagram.com" />
    </Card>
  );
}
