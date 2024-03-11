import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function RewardBalanceCard() {
  return (
    <div>
         <Card className="dealCard mb-4">
        <Card.Body className="card-body-spacing">
          <Row >
            <Col xs={12} className="col-spacing text-start">
              <Card.Text className="cardtitle">Total Rewards Balance</Card.Text>
            </Col>
          </Row>
          <Row className='spacing-wallet' >
            <Col xs={12} className="col-spacing">
              <Card.Text className="card-balance text-start">SAR 0</Card.Text>
            </Col>
           
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RewardBalanceCard