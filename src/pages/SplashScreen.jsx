import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assests/css/splashscreen.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../assests/images/splashlogo.svg";
function SplashScreen() {
  let navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/page/home");
    }, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="splashscreen d-flex justify-content-center align-items-center flex-column text-align-center">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Image className="img-fluid" src={logo} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={12}>
            <p className="heading-splash">Real Estate Website </p>
            <p className="heading-splashscreen"> Powered By Machknow Soft</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SplashScreen;
