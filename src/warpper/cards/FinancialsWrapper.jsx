import React from 'react'
import { Row } from 'react-bootstrap'
import { financialsData} from '../../constant/constant'
import PortfolioCard from "../../components/card/PortfolioCard"
const FinancialsWrapper = () => {
  return (
    <>
    <Row className='justify-content-start'>
      {financialsData.map((item, index) => (
       
          <PortfolioCard item={item} key={index} />
       
      ))}
     </Row>
    
      
    </>
  )
}

export default FinancialsWrapper
