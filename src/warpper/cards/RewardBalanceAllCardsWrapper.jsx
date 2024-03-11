import React from 'react'
import { RewardBalanceData } from '../../constant/constant'
import RewardBalanceAllCard from '../../components/card/RewardBalanceAllCard'
import { Row } from 'react-bootstrap'

function RewardBalanceAllCardsWrapper() {
  return (
    <div>
         <Row className='justify-content-start'>
        {RewardBalanceData?.map((item, index) => (
        <RewardBalanceAllCard item={item} />
    ))}
  </Row>
    </div>
  )
}

export default RewardBalanceAllCardsWrapper