import React from "react";
import { profileCardData } from "../../constant/constant";
import { Row, Col } from "react-bootstrap";
import ProfileCard from "../../components/card/ProfileCard";

const CardWrapper = () => {
  return (
    <>
      <Row>
        {profileCardData.map((item, index) => (
          <Col lg={4} md={6} sm={12} key={item.id}>
            <ProfileCard item={item} key={index} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CardWrapper;
