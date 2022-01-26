import React, {Component} from 'react';
import { Row, Col } from 'antd';


import Button1 from './Button1';




class Loading extends Component {

    render(){
        return(
            <>
            <Row gutter={[16, 16]}>
                <Col span={6} ><Button1/></Col>
            </Row>
            </>
          )
    }
}



export default Loading;