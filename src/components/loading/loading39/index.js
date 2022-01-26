import { Card } from 'antd';
import styles from './Loading.module.scss'

const { Meta } =  Card;



export default function Loading(){
    return (
        <Card
        hoverable
        >
        <section className={styles.bg}>
            <div className={`${styles.loader} ${styles["loader-7"]}`}>
            <div className={`${styles.line} ${styles.line1}`}></div>
            <div className={`${styles.line} ${styles.line2}`}></div>
            <div className={`${styles.line} ${styles.line3}`}></div>
            </div>
        </section>
        <Meta title="Heart Loading" description="www.instagram.com" />
        </Card>
    )
}
