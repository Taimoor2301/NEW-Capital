import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../../assests/css/filtercardsakuk.css";
import { ApplicationInterfaceSliderData } from "../../constant/constant";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function FilterCardsSakook() {
  const [activeFilter, setActiveFilter] = useState("All"); // State to track active filter

  // Function to toggle the active filter
  const toggleFilter = (filter) => {
    setActiveFilter((prevFilter) => (prevFilter === filter ? "All" : filter));
  };

  // Function to filter cards based on the selected filter
  const filteredData = () => {
    if (activeFilter === "All") {
      return ApplicationInterfaceSliderData; // Return all data if 'All' filter is selected
    }
    return ApplicationInterfaceSliderData.filter(
      (item) => item.category === activeFilter
    ); // Filter data based on the category
  };

  return (
    <section className="filter-cards">
      <Container>
        <Row className="justify-content-center">
          <Col xl={7} lg={8}>
            <div className="shadow-lg button-spacing">
              <Button
                className={`btn-filter ${
                  activeFilter === "All" ? "active" : ""
                }`}
                onClick={() => toggleFilter("All")}
              >
                All
              </Button>
              <Button
                className={`btn-filter ${
                  activeFilter === "Available" ? "active" : ""
                }`}
                onClick={() => toggleFilter("Available")}
              >
                Available
              </Button>
              <Button
                className={`btn-filter ${
                  activeFilter === "Funded" ? "active" : ""
                }`}
                onClick={() => toggleFilter("Funded")}
              >
                Upcoming
              </Button>
              <Button
                className={`btn-filter ${
                  activeFilter === "Excited" ? "active" : ""
                }`}
                onClick={() => toggleFilter("Excited")}
              >
                Closed
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          {filteredData().map((i, index) => (
            <Col lg={4} key={index} className="mb-4">
              <Card className="shadow-sm border-0">
                <Row>
                  <Col sm={6}>
                    <Card.Img className="image-card" src={i.imgsrc} />
                  </Col>
                  <Col sm={6}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        padding: "5px 0",
                      }}
                    >
                      <p className="villa">Luxury Villa</p>
                      <Card.Title className="title">{i.title}</Card.Title>
                      <p className="d-flex align-items-center rating">
                        <FaStar className="star" /> 4.9
                      </p>
                      <p className="d-flex align-items-center location">
                        <FaLocationDot className="loca" /> Riyadh, Saudi Arabia
                      </p>
                      <Card.Text className="label">SAR 290</Card.Text>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FilterCardsSakook;
