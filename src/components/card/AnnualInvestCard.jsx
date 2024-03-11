import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const AnnualInvestCard = ({ item }) => {
  return (
    <Row>
      <Col lg={6} md={6} sm={6} xs={6}>
        <Card.Title className="row1text">{item.title}</Card.Title>
      </Col>

      <Col lg={6} md={6} sm={6} xs={6}>
        <Card.Title className="row2Text">{item.discription}</Card.Title>
      </Col>
    </Row>
  );
};

export default AnnualInvestCard;
