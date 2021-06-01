import React from 'react';


import { Container, Row, Col, Card } from "react-bootstrap";
import { Jumbotron, ListGroup } from "react-bootstrap";
//import background from "./background/doodle-icon.jpg";
// import emote from "images/choncc_panda_nice.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarf from "../Navbar";
import Footer from "../footer";
import Socials from "../socials";

function homepage() {
  return (
    <div className="App">
      <Jumbotron className="App-header">
        <h1 className="overnight">OVERNIGHT</h1>
      </Jumbotron>
      <Container className="main-container">
        {/* Grid System */}
        <Row className="justify-content-md-center companyName">
          <Col md={5}>
            <h1 className="legends">LEGENDS</h1>
          </Col>
        </Row>
        {/* Introduction Content */}
        <Row className="justify-content-md-center introduction">
          <Col></Col>
          <Col xs={6} className="introScript">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Col>
        </Row>
        {/* Selection for User */}
        {/* <Row className="justify-content-md-center selections">
          <Selections></Selections>
        </Row> */}
      </Container>

      <div>

      </div>
      <Row className="recent-customer">
        <Col xs={4}>
          <h1 className="customer-header">Recent Customers</h1>
        </Col>
        <Col>
          <ListGroup className="customer-list">
            <ListGroup.Item>TheDangster101</ListGroup.Item>
            <ListGroup.Item>formosaboba</ListGroup.Item>
            <ListGroup.Item>forukotan</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Socials></Socials>
      <Footer></Footer>
    </div>


  );
}

export default homepage;