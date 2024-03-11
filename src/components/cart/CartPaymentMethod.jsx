import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import visalogo from "../../assests/images/visacardlogo.svg";
import "../../assests/css/cartitemscard.css";
import { LinkContainer } from "react-router-bootstrap";

function CartPaymentMethod() {
  return (
    <div className="cart-payment">
      <Col lg={12} className="mb-4">
        <Card className="shadow-xl">
          <Row>
            <Col lg={6} md={6} sm={6} xs={6}>
              <p className="head-cart">Payment methods</p>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <p className="edit-cart">Edit</p>
            </Col>
          </Row>
          <Card className="card-sm">
            <Row>
              <Col lg={1} md={1} sm={3} xs={3}>
                <div className="roundDiv d-flex align-items-center justify-content-center">
                  <Image src={visalogo} />
                </div>
              </Col>
              <Col lg={8} md={8} sm={6} xs={6}>
                <p className="mb-0">Mastercard: 5432</p>
                <p className="mb-0">
                  Exp. date: <span>12/27</span>{" "}
                </p>
              </Col>
              <Col lg={3} md={3} sm={3} xs={3}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                ></input>
              </Col>
            </Row>
          </Card>
          <Card className="card-sm">
            <Row>
              <Col lg={1} md={1} sm={3} xs={3}>
                <div className="roundDiv d-flex align-items-center justify-content-center">
                  <Image src={visalogo} />
                </div>
              </Col>
              <Col lg={8} md={8} sm={6} xs={6}>
                <p className="mb-0">Visa: 4291</p>
                <p className="mb-0">
                  Exp. date: <span>12/27</span>{" "}
                </p>
              </Col>
              <Col lg={3} md={3} sm={3} xs={3}>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                ></input>
              </Col>
            </Row>
          </Card>
          <LinkContainer to={"/user/checkout"}>
            <Button>Checkout</Button>
          </LinkContainer>
        </Card>
      </Col>
    </div>
  );
}

export default CartPaymentMethod;
