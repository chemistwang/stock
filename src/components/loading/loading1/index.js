import {Card} from 'antd';
import { css } from './Loading.module.scss'

const { Meta} =  Card;

export default function Loading(){
    return (
        <Card
        hoverable
        className={css}
        // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >   
        <ul>
            {
                Array(9).fill(null).map((item,index) => {
                    return <li key={index}></li>
                })
            }
        </ul>
        <Meta title="Heart Loading" description="www.instagram.com" />
        </Card>
    )

}