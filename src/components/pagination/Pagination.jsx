import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "../../assests/css/pagination.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const Pagination = () => {
  return (
    <div className="pagination">
      <Container fluid className="paginationContainer">
        <Row>
          <Col lg={12}>
            <Row>
              <Col
                xl={8}
                lg={6}
                md={5}
                sm={6}
                xs={6}
                className="d-flex justify-content-end"
              >
                <Row>
                  <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <Button className="prevbtn">
                      <span className="text-align-center">
                        <GrLinkPrevious />
                      </span>
                    </Button>
                  </Col>
                  <Col lg={9} md={9} sm={9} xs={9}>
                    <Button className="nextbtn">
                      Next page <GrLinkNext />
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xl={4} lg={6} md={7} sm={6} xs={6} className="secondcol">
                <Row>
                  <Col
                    lg={7}
                    md={3}
                    sm={4}
                    xs={4}
                    className="d-flex justify-content-end"
                  >
                    <p>pages</p>
                  </Col>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    {/* <Form>
                      <Form.Group>
                        <Form.Control className="custom-input" value={"2"} />
                      </Form.Group>
                    </Form> */}
                    <p className="form-control text-center">2</p>
                  </Col>
                  <Col lg={4} md={7} sm={5} xs={5}>
                    <p className="secondpara">of 12</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pagination;
