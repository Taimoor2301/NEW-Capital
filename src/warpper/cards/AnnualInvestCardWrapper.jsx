import React from 'react'
import { Card, Col, Row ,ProgressBar} from 'react-bootstrap';
import {AnnualInvestData } from '../../constant/constant'
import AnnualInvestCard from "../../components/card/AnnualInvestCard"
const AnnualInvestCardWrapper = () => {
  return (
    <Row>
    <Col xl={12} lg={12} md={12} sm={12} className="mt-md-3 mt-3">
  
    <Card  className='dealCard mb-4'>
 
           
          
     <Card.Body className='mt-1'>
     {AnnualInvestData.map((item, index) => (
       
       <AnnualInvestCard item={item} key={index} />
    
   ))}
    <ProgressBar  now={60}  />
    <p className='lastpara'>50% Limit used</p>
        </Card.Body>
        </Card>
        </Col>


       
        </Row>
  )
}

export default AnnualInvestCardWrapper
