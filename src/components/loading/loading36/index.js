import { Card } from 'antd';
import { css, bg } from './Loading.module.scss'

const { Meta } =  Card;



export default function Loading(){
    return (
        <Card
        hoverable
        className={css}
        >
            <div className={bg}>
                <ul>
                {
                    Array(2).fill(null).map((item,index) => {
                        return <li key={index}></li>
                    })
                }
                </ul>
            </div>
        
        <Meta title="Heart Loading" description="www.instagram.com" />
        </Card>
    )
}
