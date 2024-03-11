import React from 'react'
import {
    Container,
    Row,
    Col,
   
  } from "react-bootstrap";
  import '../../assests/css/profileCards.css'
import CardWrapper from '../../warpper/cards/CardWrapper';

const ProfileSetting = () => {
  return (
    <div className="ProfileSetting d-flex justify-content-center  flex-column">
    <Container fluid className="cartContainer">
     <Row>

     <Col lg={11} md={12} sm={12}>
      <Row>
        <Col>
        <h1 className='text-start' >
        Profile
        </h1>
        </Col>
        
      </Row>
      <Row>
        <Col lg={12}>
          <CardWrapper/>
        </Col>
      </Row>
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default ProfileSetting
