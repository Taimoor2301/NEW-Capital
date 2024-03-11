import React from 'react'
import RewardBalanceCard from '../../components/card/RewardBalanceCard'
import "../../assests/css/reward.css"
import { Col, Row } from 'react-bootstrap'
import RewardBalanceAllCard from '../../components/card/RewardBalanceAllCard'
import PropertyIntroCard from '../../components/card/PropertyIntroCard'
import RefferCards from '../../components/card/RefferCards'
function RewardCardsWrapper() {
  return (
    <div className='reward-balance'>
      <Row>
        <Col>
         <h1 className='reward-head text-start'>Rewards</h1>
        </Col>
      </Row>
        <Row>
            <Col lg={5}  >
            <RewardBalanceCard/>
            </Col>
            <Col lg={5}  >
            <RewardBalanceAllCard/>
            </Col>
            <Col lg={4}  >
            <PropertyIntroCard/>
            </Col>
            <Col lg={6}  >
            <RefferCards/>
            </Col>
        </Row>
    </div>
  )
}

export default RewardCardsWrapper