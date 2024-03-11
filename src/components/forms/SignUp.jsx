import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import "../../assests/css/signUp.css";
import { useNavigate } from "react-router-dom";
import LogoImage from "../../assests/images/logo.svg";
import SignInImage from "../../assests/images/Sign up Image.png";
import { LinkContainer } from "react-router-bootstrap";

const SignUp = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [validationemail, setvalidationEmail] = useState(null);
  const [validationusername, setvalidationUserName] = useState(null);
  const [validationpassword, setvalidationPassword] = useState(null);
  const [validationconfirmpassword, setvalidationConfirmPassword] =
    useState(null);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setvalidationEmail(null);
  };
  const handleUsernameChange = (value) => {
    setUserName(value);
    setvalidationUserName(null);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleCPasswordChange = (value) => {
    setConfirmPassword(value);
    setvalidationConfirmPassword(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();

    if (!username) {
      setvalidationUserName("Please enter your username");
    } else if (!email) {
      setvalidationEmail("Please enter email");
    } else if (!password) {
      setvalidationPassword("Please enter your password");
    } else if (password !== confirmpassword) {
      setvalidationConfirmPassword("Passwords do not match");
    } else {
      // All fields are filled, navigate to the home page
      navigate("/user/dashboard"); // Change "/home" to the actual path of your home page
    }
  };

  const renderTooltip = (message) => <Tooltip id="tooltip">{message}</Tooltip>;

  return (
    <Container fluid className="sign-up-container">
      <Row>
        <Col lg={7} md={7} className="text-start">
          <Image src={LogoImage} alt="logoImage" fluid className="logo-image" />
          <h1>Signup</h1>
          <div className="d-flex justify-content-center">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId={`formBasicUsername`}>
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip(validationusername)}
                  show={validationusername !== null}
                >
                  <Form.Control
                    className="first-field"
                    placeholder="Full Name"
                    value={username}
                    onChange={(e) => handleUsernameChange(e.target.value)}
                  />
                </OverlayTrigger>
              </Form.Group>
              <Form.Group controlId={`formBasicemail`}>
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip(validationemail)}
                  show={validationemail !== null && validationemail !== ""}
                >
                  <Form.Control
                    className="other-field"
                    type={email}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                  />
                </OverlayTrigger>
              </Form.Group>
              <Form.Group controlId={`formBasicpassword`}>
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip(validationpassword)}
                  show={validationpassword !== null}
                >
                  <Form.Control
                    className="other-field"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                  />
                </OverlayTrigger>
                {/* <div className="password-toggle" onClick={handleTogglePassword}>
                  {showPassword ? (
                    <FaRegEyeSlash className="icon" />
                  ) : (
                    <FaRegEye className="icon" />
                  )}
                </div> */}
              </Form.Group>
              <Form.Group controlId={`formBasicconfirmpassword`}>
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip(validationconfirmpassword)}
                  show={validationconfirmpassword !== null}
                >
                  <Form.Control
                    className="other-field"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmpassword}
                    onChange={(e) => handleCPasswordChange(e.target.value)}
                  />
                </OverlayTrigger>
                {/* <div className="password-toggle" onClick={handleTogglePassword}>
                  {showPassword ? (
                    <FaRegEyeSlash className="icon" />
                  ) : (
                    <FaRegEye className="icon" />
                  )}
                </div> */}
              </Form.Group>

              <Button className="sign-in-container-button" type="submit">
                SignUp
              </Button>
            </Form>
          </div>
          <p>
            By clicking Log In you agree to NUE Capital Terms <br></br>&
            Conditions and Key Risks
          </p>
          <p className="secondpara">
            Already a member?
            <LinkContainer to="/auth/signin" style={{ cursor: "pointer" }}>
              <span className="cursor-pointer">Login</span>
            </LinkContainer>
          </p>

          <p className="copyRight">© 2023 MachKnowSoft. All Rights Reserved</p>
        </Col>
        <Col lg={5} md={5} className="d-none d-md-block">
          <div className="login-image-container">
            <Image
              src={SignInImage}
              alt="loginImage"
              fluid
              className="login-image"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
