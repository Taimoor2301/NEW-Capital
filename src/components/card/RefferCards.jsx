import React from "react";
import { Button, Card, Col, Form, Image, InputGroup, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import ref from "../../assests/images/ref.svg";
import { Divider } from "@mui/material";
function RefferCards() {
  return (
    <div>
      <Card className="dealCard mb-4">
        <Card.Body className="card-body-spacing">
          <Row>
            <Col xs={1} className="col-spacing text-start">
              <Image className="card-img-ref" fluid src={ref} />
            </Col>
            <Col xs={11} className="col-spacing text-start">
              <Card.Text className="card-earn text-start">
                Refer and earn
              </Card.Text>
              <Card.Text className="desc-cards text-start">
                Invite your friends and you’ll both receive a rewards balance to
                invest in our properties!
              </Card.Text>
            </Col>
            <Divider />
          </Row>
          <Row>
            <Col xs={1} className="text-start"></Col>
            <Col xs={11} className="text-sm-start text-center">
              <Card.Text className="card-aed">
                {" "}
                <FaCheck className="chcek" /> Friends get AED 250 upon signing
                up
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col xs={1} className="text-start"></Col>
            <Col xs={11} className="text-sm-start text-center">
              <Card.Text className="card-aed">
                {" "}
                <FaCheck className="chcek" /> You get USD 250 after they invest
                USD 2,000
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <InputGroup className="customTextfield">
                <Form.Control placeholder="https://getstake.com/rewards?c=MUHAMMAD9420&n" />
                <Button className="copylink-btn">Copy Link</Button>
              </InputGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RefferCards;
