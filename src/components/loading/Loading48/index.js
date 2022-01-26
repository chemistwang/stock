import { Card } from "antd";
import styles from "./Loading.module.scss";

const { Meta } = Card;

export default function Loading() {
  return (
    <Card hoverable>
      <section className={styles.bg}>
        <div className={`${styles.loader} ${styles["loader-9"]}`}>
          <svg
            className={`${styles["loader-star"]} ${styles.star1}`}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            // xml:space="preserve"
          >
            <polygon
              fill="#c6ff00"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            className={`${styles["loader-star"]} ${styles.star2}`}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            // xml:space="preserve"
          >
            <polygon
              fill="#c6ff00"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
            />
          </svg>
          <svg
            className={`${styles["loader-star"]} ${styles.star3}`}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            // xml:space="preserve"
          >
            <polygon
              fill="#c6ff00"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
            />
          </svg>
        </div>
      </section>
      <Meta title="Heart Loading" description="www.instagram.com" />
    </Card>
  );
}
