import { Card } from "antd";
import styles from "./Loading.module.scss";

const { Meta } = Card;

export default function Loading() {
  return (
    <Card hoverable>
   <div>
      <div>
        <span className={styles["dots-loader"]}></span>
      </div>
    </div>
      <Meta title="Heart Loading" description="www.instagram.com" />
    </Card>
  );
}
