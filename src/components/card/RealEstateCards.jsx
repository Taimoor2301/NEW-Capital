import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../../assests/css/filtercardsakuk.css";
import { ApplicationInterfaceSliderData } from "../../constant/constant";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function RealEstateCards() {
  return (
    <section className="filter-cards">
      <Container>
        <Row>
          {ApplicationInterfaceSliderData.map((i, index) => (
            <Col lg={4} key={index} className="mb-4">
              <Card className="shadow-sm border-0">
                <Row>
                  <Col sm={6}>
                    <Card.Img className="image-card" src={i.imgsrc} />
                  </Col>
                  <Col sm={6}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        paddingBlock: "5px",
                        height: "100%",
                      }}
                    >
                      <p className="villa">Luxury Villa</p>
                      <Card.Title className="title">{i.title}</Card.Title>
                      <p className="d-flex align-items-center rating">
                        <FaStar className="star" /> 4.9
                      </p>
                      <p className="d-flex align-items-center location">
                        <FaLocationDot className="loca" /> Riyadh, Saudi Arabia
                      </p>
                      <Card.Text className="label">SAR 290</Card.Text>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default RealEstateCards;
