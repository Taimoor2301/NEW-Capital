import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Form,
  InputGroup,
} from "react-bootstrap";
import "../../assests/css/payment.css";
import visaImage from "../../assests/images/visaImage.svg";
import visaLogoImage from "../../assests/images/visacardlogo.svg";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="paymentScreen ">
      <Container fluid className="cartContainer text-start">
        <Row>
          <Col>
            <h1>Check Out</h1>
          </Col>
        </Row>
        <Row className="secondRow">
          <Col lg={8} sm={12}>
            <Card className="my-card">
              <Card.Body>
                <Row>
                  <Col>
                    <h2>Personal Information</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form>
                      <Form.Group controlId="name">
                        <Form.Control type="text" placeholder="Your Name" />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row className="d-flex">
                  <Col lg={6}>
                    <Form>
                      <Form.Group controlId="email">
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col lg={6}>
                    <Form>
                      <Form.Group controlId="number">
                        <Form.Control
                          type="number"
                          placeholder="Phone Number"
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="secondRow">
          <Col lg={8} sm={12}>
            <Card className="my-card">
              <Card.Body>
                <Row>
                  <Col>
                    <h2>Payment Methods</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
                <Row>
                  <Col lg={4} md={5} sm={12} xs={12}>
                    <Row className="d-flex">
                      <Col lg={6} md={6} sm={6} xs={6} className="d-flex">
                        <Form>
                          <Form.Check
                            type="radio"
                            name="radioGroup"
                            id="option1"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={handleRadioChange}
                          />
                        </Form>
                        <div className="roundDiv d-flex align-items-center justify-content-center">
                          <Image src={visaLogoImage} alt="visaCardlogo" fluid />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6} className="d-flex">
                        <Form>
                          {" "}
                          <Form.Check
                            type="radio"
                            name="radioGroup"
                            id="option2"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={handleRadioChange}
                          />
                        </Form>
                        <div className="roundDiv d-flex align-items-center justify-content-center">
                          <Image src={visaImage} alt="visaImage" fluid />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form>
                      <Form.Group controlId="cardname">
                        <Form.Control
                          type="text"
                          placeholder="Cardholder Name"
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form>
                      <InputGroup>
                        <Form.Control
                          placeholder="Card Number"
                          className="card-number"
                        />
                        <InputGroup.Text id="basic-addon2">
                          <span>
                            {" "}
                            <Image
                              src={visaLogoImage}
                              alt="visaCardlogo"
                              fluid
                            />
                          </span>
                        </InputGroup.Text>
                      </InputGroup>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} md={7}>
                    <Row className="d-flex">
                      <Col lg={6} md={6}>
                        <Form>
                          <Form.Group controlId="expiredate">
                            <Form.Control type="text" placeholder="EXP Date" />
                          </Form.Group>
                        </Form>
                      </Col>
                      <Col lg={6} md={6}>
                        <Form>
                          <Form.Group controlId="cvc">
                            <Form.Control type="text" placeholder="CVC" />
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Row>
              <Col lg={4} md={6} className="mb-2" >
                <Button className="w-100">Pay Now</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
