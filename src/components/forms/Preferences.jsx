import React from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Image,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import { CiGlobe } from "react-icons/ci";
import "../../assests/css/preferences.css";
import riyalImage from "../../assests/images/currency-riyal.svg";
import currencyImage from "../../assests/images/currency.svg";
import { FaChevronDown } from "react-icons/fa";

const Preferences = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    "Select Language"
  );

  const [receiveMarketingEmails, setReceiveMarketingEmails] = React.useState(
    true
  );
  return (
    <div className="PreferencesScreen d-flex   flex-column">
      <Container fluid className="cartContainer">
        <Row>
          <Col lg={9} md={12} sm={12} className="text-start">
            <Row>
              <Col>
                <h1>Preferences</h1>
              </Col>
            </Row>

            <Row className="languages">
              <Col xl={4} lg={5} md={6} className="d-flex">
                <div className="roundDiv d-flex align-items-center justify-content-center">
                  <CiGlobe className="iconstyle" />
                </div>
                <p>Languages</p>
              </Col>

              <Col xl={5} lg={6} md={6}>
                {/* <Dropdown>
                  <Dropdown.Toggle className="custom-dropdown">
                    {selectedLanguage}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => setSelectedLanguage("English")}
                    >
                      English
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setSelectedLanguage("Arabic")}
                    >
                      Arabic
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
                <Dropdown className="">
              <Dropdown.Toggle
                className="custom-dropdown"
                style={{ width: "100%" }}
              >
                {selectedLanguage ? (
                  <>
                    {selectedLanguage}
                    <FaChevronDown className="text-black ps-2 fs-5" />
                  </>
                ) : (
                  <span className="d-flex justify-content-between p-2">
                    {" "}
                    <p className="select-options">Select Language</p>{" "}
                    <FaChevronDown className="text-end text-black ps-2 fs-5" />{" "}
                  </span>
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item
                      onClick={() => setSelectedLanguage("English")}
                    >
                      English
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setSelectedLanguage("Arabic")}
                    >
                      Arabic
                    </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              </Col>
            </Row>
            <Row className="languages">
              <Col xl={4} lg={5} md={6} className="d-flex">
                <div className="roundDiv d-flex align-items-center justify-content-center">
                  <Image src={riyalImage} alt="riyalImage" fluid />
                </div>
                <p>Currency</p>
              </Col>

              <Col xl={5} lg={6} md={6}>
                {/* <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" disabled>
              <Image src={currencyImage} alt="currencyImage" fluid />
              {' '}
              Saudi Arabia Riyal
              </Dropdown.Toggle>

          
            </Dropdown> */}
                <InputGroup className="custom-input-group">
                  <InputGroup.Text className="input-group-text">
                    <Image src={currencyImage} alt="currencyImage" fluid />
                    <span>Saudi Arabia Riyal</span>
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className="secondHeading">Marketing Emails</h1>
              </Col>
            </Row>

            <Row className="last-row">
              <Col lg={8} sm={7}>
                <p className="secondpara">
                  Receive newsletters, promotional offers, new property launch
                  emails and more.
                </p>
              </Col>
              <Col lg={4} sm={5}>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    checked={receiveMarketingEmails}
                    onChange={() =>
                      setReceiveMarketingEmails(!receiveMarketingEmails)
                    }
                  />
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Preferences;
