import React from "react";
import "../../assests/css/bannerdescription.css";
import { Button, Col, Container, Row } from "react-bootstrap";
function BannerDescriptionButton({ name, heading, description }) {
  return (
    <section className="des-section">
      <Container fluid>
        <div
          className="des-start"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          {/* <Button className='contact' >{name} </Button> */}
          <h1 className="heading">{heading}</h1>
          <p className="desc">{description}</p>
          <div className=" text-center learn-more">
            {/* <Button  className="learnbtn">
      Sell With NUE
      </Button> */}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BannerDescriptionButton;
