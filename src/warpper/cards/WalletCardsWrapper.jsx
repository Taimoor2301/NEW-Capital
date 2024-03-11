import React from 'react'
import { WalletCardsData } from '../../constant/constant'
import WalletCards from "../../components/card/WalletCards"
import { Col, Row } from 'react-bootstrap'
import "../../assests/css/walletcard.css"
function WalletCardsWrapper() {
  return (
    <div className='walletcard-wrapp'> 
    <Row>
      <Col>
        <h1 className='text-start wallet-heading'>Wallet</h1>
      </Col>
    </Row>
      <Row className='justify-content-start'>
    {WalletCardsData?.map((item, index) => (
        <WalletCards item={item} />
    ))}
  </Row>
  </div>
  )
}

export default WalletCardsWrapper