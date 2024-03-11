import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const MessageBox = () => {
  return (
    <>
      <Row>
        <Col lg={6} md={12} sm={6}>
          <Form.Group controlId="firstName" className="text-start">
            <Form.Label className="label-contact" >First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" />
          </Form.Group>
        </Col>
        <Col lg={6} md={12} sm={6} className="rightCol" >
          <Form.Group controlId="lastName" className="text-start">
            <Form.Label className="label-contact">Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={6}  md={12} sm={6}>
          <Form.Group controlId="email" className="text-start">
            <Form.Label className="label-contact label-forms">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
        </Col>
        <Col lg={6} md={12}  sm={6} className="rightCol ">
          <Form.Group controlId="number" className="text-start" >
            <Form.Label className="label-contact label-forms">Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="Enter your phone number" />
          </Form.Group>
        </Col>
        <div className="CheckSubject text-start">
          <p>Select Subject?</p>
          <Form.Check
            inline
            label="General Inquiry"
            id={`check`}
            className="custom-checkbox"
          />
        </div>
      </Row>
      <Row md={12} className="text-start">
        <Form.Group controlId="message">
          <Form.Label className="labelMsg label-forms">Message</Form.Label>
          <Form.Control
            as="textarea"
            className="msgText"
            rows={1}
            placeholder="Write your message.."
          />
        </Form.Group>
      </Row>
      <div className="formButton text-end">
        <Button type="button" className="customButton">
          Send Message
        </Button>
      </div>
    </>
  );
};

export default MessageBox;
