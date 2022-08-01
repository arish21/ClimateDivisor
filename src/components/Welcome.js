import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="heading">
        <p className="container-intro">Bonjour. Hello!</p>
        <p className="heading-info">
          Please navigate through the app using the navigation bar
        </p>

        <br />
        <br />

        <p className="line">
          <span>OR</span>
        </p>

        <br />
        <br />
        <br />

        <Container>
          <Row>
            <Col md={{ span: 3, offset: 3 }}>
              <Link to="/login">
                <Button variant="dark-btn login">Login</Button>
              </Link>
            </Col>
            <Col md={{ span: 3, offset: 2 }}>
              <Link to="/signup">
                <Button variant="outline-dark-btn signup">Signup</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Welcome;
