import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,

} from "react-router-dom";

import {Divider, List, Row, Col} from 'antd';
import './home.css'

import Loading from '../../components/loading/loading'
import Button from '../../components/button/button'
import Border from '../../components/border/border'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/css">CSS</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/css">
            <Css />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

function Home() {
  return (
    <div>
      <Divider orientation="left">Home</Divider>
      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
      />

    </div>
  );
}

function Css() {
  let { path, url } = useRouteMatch();

  return (
    <>
     <Divider orientation="left">CSS</Divider>
      <Row gutter={[16, 16]}>
          <Col span={8}>
            <Link to={`${url}/loading`}>Loading</Link>
          </Col>
          <Col span={8}>
            <Link to={`${url}/border`}>Border</Link>
          </Col>
          <Col span={8}>
            <Link to={`${url}/button`}>Button</Link>
          </Col>
      </Row>
      <Row gutter={[16, 16]}>
          <Col span={8}>
          <Link to={`${url}/canvas`}>Canvas</Link>
          </Col>
          <Col span={8}>
            <div>Column</div>
          </Col>
          <Col span={8}>
            <div>Column</div>
          </Col>
      </Row>

      <Switch>
        {/* <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route> */}
        <Route path={`${path}/loading`}>
          <Loading />
        </Route>
        <Route path={`${path}/border`}>
          <Border />
        </Route>
        <Route path={`${path}/button`}>
          <Button />
        </Route>
        <Route path={`${path}/canvas`}>
          <Canvas />
        </Route>
      </Switch>
    </>
  );
}




function Canvas(){
  return(
    <div>canvas</div>
  )
}
