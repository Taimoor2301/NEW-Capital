import React from 'react'
import { Row } from 'react-bootstrap'
import { InsightsData} from '../../constant/constant'
import InsightsCard from "../../components/card/InsightsCard"
const InsightDataWrapper = () => {
  return (
    <Row className='justify-content-start'>
      {InsightsData.map((item, index) => (
       
          <InsightsCard item={item} key={index} />
       
      ))}
     </Row>
  )
}

export default InsightDataWrapper
