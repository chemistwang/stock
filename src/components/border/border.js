import React, {Component} from 'react';
import { Row, Col } from 'antd';


import Border1 from './Border1';




class Border extends Component {

    render(){
        return(
            <>
            <Row gutter={[16, 16]}>
                <Col span={6} ><Border1/></Col>
            </Row>
            </>
          )
    }
}



export default Border;