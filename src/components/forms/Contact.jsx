import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assests/css/contact.css";
import ContactInfo from "../../components/forms/ContactInfo"
import SocialIcons from "../../components/forms/SocialIcons"
import MessageBox from "../../components/forms/MessageBox"
const Contact = () => {
  
  return (
    <Container className="contactContainer">
      <Row>
        <Col lg={5} md={6} sm={12} className="contactInfo text-start">
          <ContactInfo />
          <SocialIcons />
        </Col>
        <Col lg={7} md={6} sm={12} className="MessageBox">
          <MessageBox />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
