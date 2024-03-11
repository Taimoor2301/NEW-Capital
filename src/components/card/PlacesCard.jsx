import React from "react";
import { Row, Col, Card } from "react-bootstrap";
const PlacesCard = ({ item }) => {
  return (
        <Col lg={4} sm={6} className="mb-5" >
          <Card className="dealCard mb-4" key={item.id}>
        <Row>
            <Col sm={5} className="col-spacing">
               <Card.Img className="cardImage img-fluid " src={item.imgsrc} />
            </Col>
                <Col sm={7} className="text-sm-start text-center col-spacings" >
            <Card.Body className="card-body-spacing" >
                  <Card.Text className="cardText">{item.title}</Card.Text>
            </Card.Body>
                </Col>
        </Row>
          </Card>
        </Col>
        

  );
};

export default PlacesCard;
