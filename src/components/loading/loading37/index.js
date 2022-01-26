import { Card } from "antd";
import styles from "./Loading.module.scss";

const { Meta } = Card;

export default function Loading() {
  return (
    <Card hoverable>
        <div className={styles.bg}>
        <div className={styles.container}>
        <svg
          className={styles["loader-star"]}
          xmlns="http://www.w3.org/2000/svg"
        //   xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <polygon
            points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 "
            fill="#18ffff"
          />
        </svg>
        <div className={styles["loader-circles"]}></div>
      </div>
        </div>
      

      <Meta title="Heart Loading" description="www.instagram.com" />
    </Card>
  );
}
