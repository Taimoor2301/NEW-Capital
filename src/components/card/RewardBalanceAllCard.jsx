import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { RewardBalanceData } from '../../constant/constant'

function RewardBalanceAllCard({item}) {
  return (
    <div>
      <Row className='justify-content-center'>
        <Col xs={12}>
          <Card className="dealCard mb-4">
            <Card.Body className="card-body-spacing">
              {RewardBalanceData?.map((item, index) => (
                <Row key={index} className="mb-1">
                  <Col xs={6} className="text-start">
                    <div className='d-flex'>
                    <Image src={item.imgsrc} alt={item.title} fluid />
                    <Card.Text className="card-name ms-2">{item.title}</Card.Text>
                    </div>
                  </Col>
                  <Col xs={6} className="text-sm-end text-center">
                    <Card.Text className="card-sar">{item.sar}</Card.Text>
                  </Col>
                </Row>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default RewardBalanceAllCard