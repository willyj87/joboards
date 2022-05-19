import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Offers from '../containers/offers';
import Teams from '../containers/teams';
import NavbarLayout from '../layouts/Navbar';
import store from '../redux/store';
import '../sass/_app.scss';

const IndexPage = () => (
  <Provider store={store}>
    <NavbarLayout />
    <Container>
      <title>Mwm Jobs</title>
      <div className="d-r j-c">
        <h1>Welcome to MWM jobboard</h1>
      </div>
      <Row>
        <Col sm="2">
          <Teams />
        </Col>
        <Col sm="10">
          <Offers />
        </Col>
      </Row>
    </Container>
  </Provider>
);

export default IndexPage;
