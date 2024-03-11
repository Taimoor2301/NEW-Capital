import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { ApplicationInterfaceSliderData } from "../../constant/constant";
import "../../assests/css/cartitemscard.css";

function CartItems() {
  return (
    <div className="cart-cards">
      <Row>
        {ApplicationInterfaceSliderData.map((i, index) => (
          <Col xl={6} lg={3} key={index} className="mb-4">
            <Card className="shadow-xl">
              <Row>
                <Col xl={6} lg={12} sm={6}>
                  <Card.Img
                    className="image-card img-fluid mb-xl-0 mb-lg-2"
                    src={i.imgsrc}
                  />
                </Col>
                <Col
                  xl={6}
                  lg={12}
                  sm={6}
                  className="text-xl-start text-lg-center"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "5px 0",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="villa">Luxury Villa</p>
                    <Card.Title className="title">{i.title}</Card.Title>
                    <p className="d-flex align-items-center rating">
                      <FaStar className="star" /> 4.9
                    </p>
                    <p className="d-flex align-items-center location">
                      <FaStar className="star" /> Riyadh, Saudi Arabia
                    </p>
                    <Card.Text className="label">SAR 290</Card.Text>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CartItems;
