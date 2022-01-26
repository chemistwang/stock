import { Card } from "antd";
import styles from "./Loading.module.scss";

const { Meta } = Card;

export default function Loading() {
  return (
    <Card hoverable>
      <div>
        <div className={styles.loadEffect}>
        <div><span></span></div>
		        <div><span></span></div>
		        <div><span></span></div>
		        <div><span></span></div>
        </div>
      </div>
      <Meta title="Heart Loading" description="www.instagram.com" />
    </Card>
  );
}
