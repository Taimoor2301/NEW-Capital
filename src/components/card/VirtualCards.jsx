import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

function VirtualCards({ item }) {
  return (
    <>
    <Col xl={5} lg={6} sm={12} className="mt-md-5 mt-3">
      <h1 className='text-start wallet-heading'>{item.head}</h1>
      <Card className="dealCard mb-4" key={item.id}>
        <Card.Body className="card-body-spacing">
          <Row >
            <Col xs={6} className="col-spacing text-start">
              <Card.Text className="cardtitle">{item.title}</Card.Text>
            </Col>
            <Col xs={6} className="text-sm-end text-center col-spacings">
              <Button className="cardbtn">{item.btn}</Button>
            </Col>
          </Row>
          <Row className='spacing-wallet' >
            <Col xs={12} className="col-spacing">
              <Card.Text className="card-balance text-start">{item.balance}</Card.Text>
            </Col>
           
          </Row>
        </Card.Body>
      </Card>
    </Col>

    
    </>
  );
}

export default VirtualCards;
