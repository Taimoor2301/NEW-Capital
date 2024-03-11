import React from 'react'
import { Container, Row, Col,Card,ListGroup} from "react-bootstrap";
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import '../../assests/css/transaction.css'

const Transaction = () => {
  return (
    <div className="transaction d-flex justify-content-center  flex-column">
    <Container fluid className="cartContainer">
     <Row>

     <Col xl={12}  md={12} sm={12}>
        <Row>
            <Col>
            <h1 className='text-start' >
            Transaction
            </h1>
            </Col>
        </Row>
        <Row>
            <Col lg={12} md={12} sm={12} >
          <Card className='my-card'>
          <ListGroup  className='List-group' variant="flush">
        <ListGroup.Item> <div className='d-flex justify-content-between'>
                <h1>Type</h1>
                <h1>Status</h1>

                <h1>Date</h1>

                <h1>Wallet</h1>
                <h1>Amount</h1>


            </div></ListGroup.Item>
        <ListGroup.Item>
        <p className='text-center icon-text'><HiOutlineExclamationCircle/></p>
        <p className='text-center'>No transaction yet</p>
        </ListGroup.Item>
       
      </ListGroup>
          </Card>
            </Col>
        </Row>

        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Transaction
