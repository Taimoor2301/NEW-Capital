import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../../assests/css/dashboardfiltercard.css";
import { ApplicationInterfaceSliderData } from "../../constant/constant";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function DashboardFilterCard() {
  const [activeFilter, setActiveFilter] = useState("All"); // State to track active filter
  const [headingText, setHeadingText] = useState("Available Properties  "); // State to hold heading text

  // Function to toggle the active filter and update the heading text
  const toggleFilter = (filter, heading) => {
    setActiveFilter((prevFilter) => (prevFilter === filter ? "All" : filter));
    setHeadingText(heading);
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
    <div>
      <section className="dashboard-cards">
        <Container className="border-create">
          <Row className="justify-content-start">
            <Col xl={7} lg={9}>
              <h3 className="text-start head-filter">{headingText}</h3>{" "}
              {/* Display heading text */}
              <div className="shadow-lg button-spacing">
                <Button
                  className={`btn-filter ${
                    activeFilter === "All" ? "active" : ""
                  }`}
                  onClick={() => toggleFilter("All", "All Properties")}
                >
                  ALL
                </Button>
                <Button
                  className={`btn-filter ${
                    activeFilter === "Available" ? "active" : ""
                  }`}
                  onClick={() =>
                    toggleFilter("Available", "Available Properties")
                  }
                >
                  Available
                </Button>
                <Button
                  className={`btn-filter ${
                    activeFilter === "Funded" ? "active" : ""
                  }`}
                  onClick={() => toggleFilter("Funded", "Funded Properties")}
                >
                  Upcoming
                </Button>
                <Button
                  className={`btn-filter ${
                    activeFilter === "Excited" ? "active" : ""
                  }`}
                  onClick={() => toggleFilter("Excited", "Exited Properties")}
                >
                  Closed
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            {filteredData().map((i, index) => (
              <Col xl={4} lg={5} md={6} key={index} className="mb-4">
                <Card className="shadow-sm border-0">
                  <Row>
                    <Col lg={6} md={4} sm={6}>
                      <Card.Img
                        className="image-card img-fluid"
                        fluid
                        src={i.imgsrc}
                      />
                    </Col>
                    <Col lg={6} md={8} sm={6}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "5px 0",
                          height: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <p className="villa">Luxury Villa</p>
                        <Card.Title className="title">{i.title}</Card.Title>
                        <p className="d-flex align-items-center rating">
                          <FaStar className="star" /> 4.9
                        </p>
                        <p className="d-flex align-items-center location">
                          <FaLocationDot className="loca" /> Riyadh, Saudi
                          Arabia
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
    </div>
  );
}

export default DashboardFilterCard;
