import React from "react";
import { Row, Col, Image, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProfileCard = ({ item }) => {
  return (
    <>
      {/* <Row>

     <Col lg={4} md={3} sm={12} key={item.id}> */}
      <LinkContainer to={item.link}>
        <Card className="my-card">
          <div className="roundDiv d-flex align-items-center justify-content-center">
            <Image src={item.imgsrc} alt="visaCardlogo" fluid />
          </div>
          <Card.Body className="text-start">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.discription}</Card.Text>
          </Card.Body>
        </Card>
      </LinkContainer>
      {/* </Col>
        </Row> */}
    </>
  );
};

export default ProfileCard;
