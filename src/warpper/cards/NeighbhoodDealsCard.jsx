import React from "react";
import { Row } from "react-bootstrap";
import "../../assests/css/neighborhooddeals.css";
import { neighbourhoodData } from "../../constant/constant";
import PlacesCard from "../../components/card/PlacesCard";

const NeighbhoodDealsCard = () => {
  return (
    <Row className="justify-content-center">
      {neighbourhoodData?.map((item, index) => (
        <PlacesCard item={item} key={index} />
      ))}
    </Row>
  );
};

export default NeighbhoodDealsCard;
