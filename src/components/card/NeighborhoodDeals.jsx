import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../assests/css/neighborhooddeals.css";
import NeighbhoodDealsCard from "../../warpper/cards/NeighbhoodDealsCard";

const NeighborhoodDeals = () => {
  return (
    <section className="neighbourhoodDeals">
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <h2>What neighbourhoods do we cover?</h2>
          <p>
            We list properties in the following neighbourhoods. If you’re
            looking <br></br>to sell in these areas then we’ll consider a full
            cash offer!
          </p>
        </div>
      </Container>
      <Container>
        <NeighbhoodDealsCard />
      </Container>
    </section>
  );
};

export default NeighborhoodDeals;
