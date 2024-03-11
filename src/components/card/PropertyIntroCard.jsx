import React from 'react'
import { Card, Col, ProgressBar, Row } from 'react-bootstrap'

function PropertyIntroCard() {
  return (
    <div>
     <Card className="dealCard mb-4">
        <Card.Body className="card-body-spacing">
          <Row >
        <Card.Text className="card-headers text-start">Property Intro </Card.Text>
            <Col xs={6} className="col-spacing text-start">
              <Card.Text className="card-invested">Invested YTD</Card.Text>
            </Col>
            <Col xs={6} className="text-sm-end text-center col-spacings">
            <Card.Text className="card-rs">2023</Card.Text>
            </Col>
          </Row>
          <Row className='spacing-wallet' >
          <Col xs={6} className="col-spacing text-start">
              <Card.Text className="card-invested">Available to invest</Card.Text>
            </Col>
            <Col xs={6} className="text-sm-end text-center col-spacings">
            <Card.Text className="card-rs">SAR 25,000</Card.Text>
            </Col>
          </Row>
          <ProgressBar now={60} />
          <Card.Text className="text-center dated-manu" >Invest SAR 25,000 by 12/2/2023</Card.Text>
        </Card.Body>
      </Card>   
    </div>
  )
}

export default PropertyIntroCard