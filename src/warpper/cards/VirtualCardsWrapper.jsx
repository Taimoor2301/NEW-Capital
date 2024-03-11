import React from 'react'
import { VirtualCardsData } from '../../constant/constant'
import VirtualCards from '../../components/card/VirtualCards'
import { Col, Row } from 'react-bootstrap'
import "../../assests/css/virtualcard.css"
function VirtualCardsWrapper() {
  return (
    <div className='virtual-wrapp'> 
   
      <Row className='justify-content-start'>
    {VirtualCardsData?.map((item, index) => (
        <VirtualCards item={item} />
    ))}
  </Row>
  </div>
  )
}

export default VirtualCardsWrapper