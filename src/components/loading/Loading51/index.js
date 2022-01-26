import { Card } from "antd";
import styles from "./Loading.module.scss";

const { Meta } = Card;

export default function Loading() {
  return (
    <Card hoverable>
      <section className={styles.container}>
        <div className={styles["circle-loader"]}>
          <div className={styles["circle-line"]}>
            <div className={`${styles["circle"]} ${styles["circle-blue"]}`}></div>
            <div className={`${styles["circle"]} ${styles["circle-blue"]}`}></div>
            <div className={`${styles["circle"]} ${styles["circle-blue"]}`}></div>
          </div>
          <div className={styles["circle-line"]}>
            <div className={`${styles["circle"]} ${styles["circle-yellow"]}`}></div>
            <div className={`${styles["circle"]} ${styles["circle-yellow"]}`}></div>
            <div className={`${styles["circle"]} ${styles["circle-yellow"]}`}></div>
          </div>
          <div className={styles["circle-line"]}>
            <div className={`${styles["circle"]} ${styles["circle-red"]}`}></div>
            <div className={`${styles["circle"]} ${styles["circle-red"]}`}></div>
            <div className={`${styles["circle"]} ${styles["circle-red"]}`}></div>
          </div>
          <div className={styles["circle-line"]}>
            <div className={`${styles["circle"]} ${styles["circle-green"]}`}></div>
            <div className={`${styles["circle"]} ${styles["circle-green"]}`}></div>
            <div className={`${styles["circle"]} ${styles["circle-green"]}`}></div>
          </div>
        </div>
      </section>
      <Meta title="Heart Loading" description="www.instagram.com" />
    </Card>
  );
}
