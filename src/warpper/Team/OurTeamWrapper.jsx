import React, { useEffect, useState } from "react";
import { TeamData, TeamDataText } from "../../constant/constant";
import OurTeams from "../../components/team/OurTeams";
import { Col, Container, Row } from "react-bootstrap";

function OurTeamWrapper() {
  const [activeId, setActiveId] = useState(null);
  const [activeButtonId, setActiveButtonId] = useState(
    TeamData.length > 0 ? TeamData[0].id : null
  );
  useEffect(() => {
    setActiveId(activeButtonId);
  }, [activeButtonId]);

  const handleButtonClick = (id) => {
    setActiveId((prevActiveId) => (prevActiveId === id ? prevActiveId : id));
    setActiveButtonId(id);
  };
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 991);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="team-wrapper">
      <Container>
        <Row>
          <Col>
            <h1 className="our-team-head">Our Team</h1>
          </Col>
        </Row>
        {!isSmallScreen && (
          <>
            <Row className="justify-content-between">
              {TeamData.map((val) => (
                <Col lg={2} key={val.id}>
                  <OurTeams
                    id={val.id}
                    imgsrc={val.imgsrc}
                    btn={val.btn}
                    status={val.status}
                    handleClick={handleButtonClick}
                    val={val}
                    activeId={activeId}
                  />
                </Col>
              ))}
            </Row>
            <Row className="justify-content-start">
              {TeamDataText.map((val) => (
                <Col lg={12} key={val.id}>
                  <OurTeams
                    id={val.id}
                    heading={val.heading}
                    text={val.text}
                    list1={val.list1}
                    list2={val.list2}
                    list3={val.list3}
                    active={activeId}
                    hideButtonAndImage={true}
                  />
                </Col>
              ))}
            </Row>
          </>
        )}
        {isSmallScreen && (
          <>
            <Row className="justify-content-between">
              {TeamData.map((val) => (
                <Col xs={12} key={val.id} className="text-center">
                  <OurTeams
                    id={val.id}
                    imgsrc={val.imgsrc}
                    btn={val.btn}
                    status={val.status}
                  />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </section>
  );
}

export default OurTeamWrapper;
