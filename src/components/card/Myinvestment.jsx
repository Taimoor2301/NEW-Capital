import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Myinvestment = () => {
  return (
    <div className="investment d-flex justify-content-center  flex-column">
      <Container fluid className="cartContainer">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Row>
              <Col>
                <h1>Transaction</h1>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12}>
                {/* <Card className="my-card">
                  <ListGroup className="List-group" variant="flush">
                    <ListGroup.Item>
                      {" "}
                      <div className="d-flex justify-content-between">
                        <h1>Property</h1>
                        <h1>Location</h1>

                        <h1>Investment Value</h1>

                        <h1>Total Rent Received</h1>
                        <h1>Status</h1>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p className="text-center icon-text">
                        <HiOutlineExclamationCircle />
                      </p>
                      <p className="text-center">No transaction yet</p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card> */}
                <Card className="my-card">
                <TableContainer >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h1>Property</h1></TableCell>
            <TableCell align="right"><h1>Investment Value</h1>
            </TableCell>
            <TableCell align="right"><h1>Status</h1></TableCell>
            {/* <TableCell align="right"><h1>Locations</h1></TableCell> */}
            {/* <TableCell align="right"><h1>Total Rent Received</h1></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
        
        <TableRow
  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
  <TableCell colSpan={5}>
    <div className="justify-content-center">
      <p className="text-center icon-text">
        <HiOutlineExclamationCircle />
      </p>
      <p className="text-center">No transaction yet</p>
    </div>
  </TableCell>
</TableRow>

        
        </TableBody>
      </Table>
    </TableContainer>

                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Myinvestment;