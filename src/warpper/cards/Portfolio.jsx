import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioValueWrapper from "../../warpper/cards/PortfolioValueWrapper";
import FinancialsWrapper from "../../warpper/cards/FinancialsWrapper";
import InsightDataWrapper from "../../warpper/cards/InsightDataWrapper";
import AnnualInvestCardWrapper from "../../warpper/cards/AnnualInvestCardWrapper";
import Myinvestment from "../../components/card/Myinvestment";
import "../../assests/css/portfolio.css";
const Portfolio = () => {
  return (
    <div className="ProtfolioScreen d-flex justify-content-center  flex-column">
      <Container fluid className="protfolioContainer text-start">
        <Row>
          <Col>
            <h1>Portfolio</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <PortfolioValueWrapper />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Financials</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <FinancialsWrapper />
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Row>
              <Col lg={8}>
                <h1>Insights</h1>
                <InsightDataWrapper />
              </Col>
              <Col xl={4} lg={6}>
                <h1>Annual Investment Limit</h1>
                <AnnualInvestCardWrapper />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Myinvestment />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
