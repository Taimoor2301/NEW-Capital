import React from 'react'
import CartItems from '../../components/cart/CartItems'
import { Col, Row } from 'react-bootstrap'
import CartPaymentMethod from '../../components/cart/CartPaymentMethod'

function CartItemsWarapper() {
  return (
    <div>
      <Row>
        <Col xl={7} lg={12} >
          <h2 className='text-start'>Cart</h2>
        <CartItems/>
        
        </Col>
        <Col xl={5} lg={10}  >
        <CartPaymentMethod/>
        
        </Col>
      </Row>
    </div>
  )
}

export default CartItemsWarapper