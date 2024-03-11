import React from 'react';
import {Row, Col} from 'react-bootstrap';
import servicesData from '../../constant/constant';
import ServicesCard from '../../components/imagegridtext/ServicesCard';

const ServicesCardData = () => {
  return (
    <Row className='position-relative'  >   
    {servicesData.map((service, index) => (
        <Col  sm={6} key={index} className='text-start' >
      <ServicesCard key={index} service={service} />
      </Col>
    ))}
  </Row>
  )
}

export default ServicesCardData
