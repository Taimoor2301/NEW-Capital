import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane
} from "react-icons/fa";
import Slide from 'react-reveal/Slide';
import logo from "../../assests/images/footerlogo.png";
import "../../assests/css/footer.css";
import { LinkContainer } from "react-router-bootstrap";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // For smooth scrolling behavior
  });
}

function Footer() {
  return (
    <section className="footer-wrapping">
      <Container>
        <Row className="text-white">
          <Col lg={4} md={6} className="text-md-start">
            <Slide  left>
          <LinkContainer to="/home">
            <Image src={logo} className="img-fluid footer-logo" />
            </LinkContainer>
            <p className="address">Office 182, Level 1, Dammam Saudi Arabia</p>
            <p className="connect">Connect with us</p>
            <p className="mail">contact@nuecapital.com</p>

            </Slide>
            <Row className="justify-content-md-between justify-content-center" >
              <Col xs={6}>
                <div className="d-flex justify-content-between  mt-3">
                  <Slide left>
                  <FaTwitter />
                  <FaInstagram />
                  <FaLinkedinIn />
                  <FaYoutube />

                  </Slide>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={3} className="text-md-center text-center">
            <Slide left>
          <LinkContainer to="/home" activeClassName="active-link" onClick={scrollToTop}>
            <p className="neu-head"> 
            NUE Capital
            </p>
            </LinkContainer>
            <ul>
            <LinkContainer to="/properties" activeClassName="active-link" onClick={scrollToTop}>
              <li className="neu-list " >Properties</li>
              </LinkContainer>
              <LinkContainer to="/about" activeClassName="active-link" onClick={scrollToTop}>
              <li className="neu-list">About</li>

              </LinkContainer>
                
              <LinkContainer to="/sell" activeClassName="active-link" onClick={scrollToTop} >
              <li className="neu-list">Sell with NUE</li>
              </LinkContainer>
            </ul>

            </Slide>
          </Col>
          {/* <Col lg={2} md={3} className="text-md-start text-center">
            <p className="neu-head">Learn</p>
            <ul>
              <li className="neu-list">FAQs</li>
              <li className="neu-list">Glossary</li>
            </ul>
          </Col> */}
          <Col lg={4} md={6} className="text-md-start text-center">
            <Slide right >

            <p className="news-head">Join Our Newsletter Now</p>
            <p className="updtaes">
              Register now to get updates on promotions...
            </p>
            <div className="subscribe-form">
              <form action="#" className="d-flex align-items-center">
                <div className="icon-container">
                  <FiUser className="icon-user" />
                </div>
                <input
                  type="text"
                  placeholder="E-mail Address"
                  className="form-control form-control-md"
                />
                <Button className="btn">
                  <FaTelegramPlane className="send-icon" />
                </Button>
              </form>
            </div>
            </Slide>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
