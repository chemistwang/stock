import { Card } from "antd";
import styles from "./Border.module.scss";

const { Meta } = Card;

export default function Border() {
  return (
    <Card hoverable>
      <div className={styles.container}>
        <div className={styles.buttonBox}>
          <button>Hover One</button>
          <div className={styles.border}></div>
          <div className={styles.border}></div>
        </div>
      </div>

      <Meta title="Heart Loading" description="www.instagram.com" />
    </Card>
  );
}
