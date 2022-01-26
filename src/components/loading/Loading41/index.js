import { Card } from 'antd';
import styles from './Loading.module.scss'

const { Meta } =  Card;



export default function Loading(){
    return (
        <Card
        hoverable
        >
  <section className={styles.bg}>
    <div className={`${styles.loader} ${styles["loader-5"]}`}>
      <div className={styles["loader-pacman"]}></div>
    </div>
  </section>
        <Meta title="Heart Loading" description="www.instagram.com" />
        </Card>
    )
}
