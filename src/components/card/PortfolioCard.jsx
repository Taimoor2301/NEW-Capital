import React from 'react'
import { Card, Col, Row ,Image} from 'react-bootstrap';

const PortfolioCard = ({item}) => {
  return (
    <>
       <Col xl={4} lg={5} md={8} sm={12} className="mt-md-3 mt-3">
  
      <Card className="dealCard mb-4" key={item.id}>
        <Card.Body className="card-body-spacing">
          <Row >
            <Col sm={6} md={7} className="col-spacing text-sm-start text-center">
              <Card.Text className="cardtitle">{item.title}</Card.Text>
              <Card.Text className="cardtext">{item.discription}</Card.Text>
            </Col>
            <Col sm={6} md={5} className="text-sm-end text-center col-spacings">
            <Image src={item.imgsrc} alt="cardImage" fluid />
            </Col>
          </Row>
        
        </Card.Body>
      </Card>
    </Col>
    
    </>
  )
}

export default PortfolioCard
