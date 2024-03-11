import React from "react";
import "../../assests/css/bannerdescription.css";
import { Col, Container, Row } from "react-bootstrap";
function BannerDescription({ name, heading, description }) {
  return (
    <section className="des-section">
      <Container fluid>
        <div
          className="des-start"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="heading">{heading}</h1>
          <p className="desc">{description}</p>
        </div>
      </Container>
    </section>
  );
}

export default BannerDescription;
