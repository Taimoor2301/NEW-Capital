import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assests/images/logo.svg";
import { Button, Dropdown, Image } from "react-bootstrap";
import { IoChevronDown } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import "../../assests/css/verticalnavbar.css";
import { useState } from "react";
function VerticalNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="verticalnav ">
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand href="#">
              <LinkContainer to={"/page/home"}>
                <Image src={logo} className="img-fluid logo-neu" />
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={toggleOffCanvas}
            />
            <Navbar.Offcanvas
              show={isOpen}
              onHide={() => setIsOpen(false)}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image src={logo} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 nav-item-vertical">
                  <LinkContainer to="/page/home">
                    <Nav.Link
                      className="nav-spacing"
                      onClick={() => setIsOpen(false)}
                    >
                      {" "}
                      Home
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/page/about">
                    <Nav.Link
                      className="nav-spacing"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/page/properties">
                    <Nav.Link
                      className="nav-spacing"
                      onClick={() => setIsOpen(false)}
                    >
                      Properties
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer
                    to="/page/sell"
                    onClick={() => setIsOpen(false)}
                  >
                    <Nav.Link>Sell</Nav.Link>
                  </LinkContainer>
                </Nav>
                <div className="d-flex justify-content-center align-items-center spacing-dropdowns">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="dropdown-butn"
                    >
                      <TbWorld className="worldicon" />
                      <span className="language-dropdown">EN</span>
                      <IoChevronDown
                        className={`icon ${isOpen ? "open" : ""}`}
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <div className="form-check">
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckEnglish"
                            style={{ fontSize: "11px" }}
                          >
                            English
                          </label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckEnglish"
                            checked // Set this attribute if you want it checked by default
                          />
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className="form-check">
                          <label
                            className="form-check-label"
                            // htmlFor="flexCheckArabic"
                            style={{ fontSize: "11px" }}
                          >
                            Arabic
                          </label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            // id="flexCheckArabic"
                          />
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="vr-line"></div>
                  <LinkContainer to="/auth/signin">
                    <Button className="login">Login</Button>
                  </LinkContainer>
                  <LinkContainer to="/auth/signup">
                    <Button className="signup">Sign up</Button>
                  </LinkContainer>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default VerticalNavbar;
