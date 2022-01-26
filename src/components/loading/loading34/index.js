import { Card } from 'antd';
import styles from './Loading.module.scss'

const { Meta } =  Card;

export default function Loading(){
    return (
        <Card
        hoverable
        // className={css}
        >
            <div className={styles.container}>
            <div className={styles.gearbox}>
                <div className={styles.overlay}></div>
                <div className={`${styles.gear} ${styles.one}`}>
                    <div className={styles["gear-inner"]}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </div>
                <div className={`${styles.gear} ${styles.two}`}>
                    <div className={styles["gear-inner"]}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </div>
                <div className={`${styles.gear} ${styles.three}`}>
                    <div className={styles["gear-inner"]}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </div>
                <div className={`${styles.gear} ${styles.four} ${styles.large}`}>
                    <div className={styles["gear-inner"]}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </div>
            </div>
            <h1>Loading...</h1>
            </div>
        <Meta title="Heart Loading" description="www.instagram.com" />
        </Card>
    )
}
