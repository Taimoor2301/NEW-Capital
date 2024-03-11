import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "../../assests/css/team.css";
import { TeamDataText } from "../../constant/constant";
import Fade from "react-reveal/Fade";

function OurTeams({
  id,
  imgsrc,
  btn,
  heading,
  text,
  handleClick,
  active,
  hideButtonAndImage,
  list1,
  list2,
  list3,
  status,
  val,
  activeId,
}) {
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

  const teamMember = TeamDataText.find((member) => member.id === 1);

  return (
    <div>
      {!isSmallScreen && !hideButtonAndImage && (
        <Fade big duration={2000}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src={imgsrc} className="position-relative img-fluid" />
            <div
              className={`triangle-button ${activeId === id ? "active" : ""}`}
              style={{
                width: "100%",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                display: "grid",
                placeContent: "center",
                textAlign: "center",
              }}
              onClick={() => handleClick(val.id)}
            >
              <div style={{ fontWeight: "700", fontSize: "12px" }}>{btn}</div>
              <p className="mb-1">{status}</p>
            </div>
          </div>
        </Fade>
      )}
      {!isSmallScreen && active === id && (
        <div>
          <Container>
            <Row>
              <Col xs={12} className="team-data text-start">
                <Fade>
                  <h1 className="heading-team">{heading}</h1>
                  <p className="text-start text-team">{text}</p>
                </Fade>
                <div className="border-team"></div>
                <Row>
                  <Col lg={9}>
                    <Fade>
                      <ul>
                        <li className="listed-team">{list1}</li>
                        <li className="listed-team">{list2}</li>
                        <li className="listed-team">{list3}</li>
                      </ul>
                    </Fade>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {isSmallScreen && !hideButtonAndImage && (
        <Fade big duration={2000}>
          <div>
            <Image src={imgsrc} className="position-relative img-fluid" />
            <Row className="justify-content-center">
              <Col xs={7}>
                <Button className="triangle-button">
                  {btn} <br></br>
                  <p className="mb-1">{status}</p>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="team-data text-start">
                <h1 className="heading-team">{teamMember.heading}</h1>
                <p className="text-start text-team">{teamMember.text}</p>
                <div className="border-team"></div>
                <Row>
                  <Col lg={9}>
                    <ul>
                      <li className="listed-team">{teamMember.list1}</li>
                      <li className="listed-team">{teamMember.list2}</li>
                      <li className="listed-team">{teamMember.list3}</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Fade>
      )}
    </div>
  );
}

export default OurTeams;
