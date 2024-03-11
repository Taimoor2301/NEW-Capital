import React from 'react'
import { PortfolioValueData} from '../../constant/constant'
import { Row } from 'react-bootstrap'
import PortfolioCard from "../../components/card/PortfolioCard"
const PortfolioValueWrapper = () => {
  return (
    <>
          <Row className='justify-content-start'>
      { PortfolioValueData.map((item, index) => (
       
          <PortfolioCard item={item} key={index} />
       
      ))}
     </Row>
  
    </>
  )
}

export default PortfolioValueWrapper
