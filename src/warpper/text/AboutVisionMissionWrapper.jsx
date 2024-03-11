import React from "react";
import { VisionMissionData } from "../../constant/constant";
import VisionMission from "../../components/text/VisionMission";
import { Col, Container, Row } from "react-bootstrap";
import "../../assests/css/aboutvissionmission.css"
import LeanMoreButton from "../../components/button/LeanMoreButton";
import { useMediaQuery } from 'react-responsive'; // Import the useMediaQuery hook
function AboutVisionMissionWrapper() {
    const getMarginBttom = (id) => {
        switch (id) {
          case 1:
            return {
              small: "43px",
              large: " 0px",
            };
          case 2:
            return {
              small: "20px",
              large: "0px",
            };
          default:
            return {
              small: "0",
              large: "0",
            };
        }
        
      };
    
      const isSmallScreen = useMediaQuery({ minWidth: 768, maxWidth: 1400 });
      const marginBottom = (id) => {
        if (isSmallScreen) {
          return getMarginBttom(id).small;
        } else {
          // Exclude the range from 1400px to 1476px
          if (window.innerWidth < 1400 || window.innerWidth > 1476) {
            return getMarginBttom(id).large;
          } else {
            return "0";
          }
        }
      };
  return (
    <section className="vissions-mission-wrapp">
      <Container>
        <Row className="justify-content-between">
          {VisionMissionData.map((val) => {
            const marginValueBottom = marginBottom(val.id);
            return (
              <Col xl={6} md={6}  key={val.id}>
                <div className="wrapper-mission-vission mb-5">
                  <VisionMission
                    id={val.id}
                    heading={val.heading}
                    text={val.text}
                    imgsrc={val.imgsrc}
                    marginBottom={marginValueBottom}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AboutVisionMissionWrapper;
