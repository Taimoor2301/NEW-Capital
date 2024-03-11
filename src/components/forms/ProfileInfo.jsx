import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { HiOutlineExclamationCircle } from "react-icons/hi";
import "../../assests/css/profile.css";

const ProfileInfo = () => {
  return (
    <div className="profileScreen d-flex justify-content-center  flex-column">
      <Container fluid className="cartContainer text-start">
        <Row>
          <Col>
            <h1>Account Information</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={7} md={10}>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Muhammad Wilayat Hussain"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="otherLabels">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="m.wilayat.hussain@gmail.com"
                />
              </Form.Group>
              <Form.Group controlId="contact">
                <Form.Label className="otherLabels">Phone Number</Form.Label>
                <Form.Control type="number" placeholder="+966 59 149 3321" />
              </Form.Group>
              {/* <Form.Group controlId="contact">
                <Form.Label className="otherLabels">
                  Investor Type <HiOutlineExclamationCircle />
                </Form.Label>
                <Form.Control type="text" placeholder="Retail" />
              </Form.Group> */}
              <Button>Delete Account</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileInfo;
