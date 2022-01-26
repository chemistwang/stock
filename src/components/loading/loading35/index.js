import { Card } from "antd";
import styles from "./Loading.module.scss";

const { Meta } = Card;

export default function Loading() {
  return (
    <Card hoverable>
      <div className={styles.robot}>
        <div className={styles.piston}>
          <div className={styles.rotator}></div>
          <div className={styles.block}>
            R<div className={styles.arm}></div>
          </div>
        </div>
        <div className={styles.piston}>
          <div className={styles.rotator}></div>
          <div className={styles.block}>
            O<div className={styles.arm}></div>
          </div>
        </div>
        <div className={styles.piston}>
          <div className={styles.rotator}></div>
          <div className={styles.block}>
            B<div className={styles.arm}></div>
          </div>
        </div>
        <div className={styles.piston}>
          <div className={styles.rotator}></div>
          <div className={styles.block}>
            O<div className={styles.arm}></div>
          </div>
        </div>
        <div className={styles.piston}>
          <div className={styles.rotator}></div>
          <div className={styles.block}>
            T<div className={styles.arm}></div>
          </div>
        </div>
      </div>
      <Meta title="Heart Loading" description="www.instagram.com" />
    </Card>
  );
}
