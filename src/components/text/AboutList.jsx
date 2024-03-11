import React from "react";
import "../../assests/css/aboutlist.css";
import { Col, Container, Row } from "react-bootstrap";
function AboutList() {
  return (
    <section className="about-list">
      <Container>
        <Row className="text-start">
          <h3 className="list-head">What is NUE!</h3>
          <Col lg={10} >
            <ul>
              <li className="list-desc">
                Many people are overly reliant on stock market for their
                investment opportunities.
              </li>
              <li className="list-desc">
                Realizing the importance of diversification outside of public
                equities, combined with the rise of a new investment vehicle as
                crowdfunding, individual investors could have a better access to
                real estate, one of the largest asset class in the world.
              </li>
              <li className="list-desc">
                NUE is a crowd-investing platform that aims to generate suitable
                returns for investors through investing in small to medium real
                estate opportunities utilizing sukuk structures.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutList;
