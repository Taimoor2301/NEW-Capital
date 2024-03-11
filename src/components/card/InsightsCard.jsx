import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";

const InsightsCard = ({ item }) => {
  return (
    <>
      <Col xl={6} lg={4} md={6} sm={12} className="mt-md-3 mt-3">
        <Card className="dealCard mb-4">
          <Row>
            <Col lg={5}>
              <Image
                src={item.imgsrc}
                alt="visaCardlogo"
                fluid
                className={`imageCard${item.id}`}
              />
            </Col>
          </Row>

          <Card.Body>
            <Row>
              <Col lg={12}>
                <Card.Title className="cardtitle">{item.title}</Card.Title>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Row>
                  <Col sm={12} >
                    <Card.Text className="cardtext">
                      {item.discription}
                    </Card.Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default InsightsCard;
