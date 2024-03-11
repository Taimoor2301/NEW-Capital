import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

function WalletCards({ item }) {
  return (
    <Col xl={5} lg={6} sm={12} className='mb-2'>
      <Card className="dealCard" key={item.id} >
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
            <Col xs={6} className="col-spacing">
              <Card.Text className="card-balance text-start">{item.balance}</Card.Text>
            </Col>
            {item.id === 1 && ( // Only render if item's ID is 1
              <Col xs={6} className="text-sm-end text-center col-spacings">
                <Button className="card-withdraw">{item.withdraw}</Button>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default WalletCards;
