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
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoImage from "../../assests/images/logo.svg";
import LoginImage from "../../assests/images/Login Image.png";
import "../../assests/css/signIn.css";
import { LinkContainer } from "react-router-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useAuth from "../../Context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State for loading
  const [showPassword, setShowPassword] = useState(false);
  const [validationemail, setvalidationEmail] = useState(null);
  const [validationpassword, setvalidationPassword] = useState(null);

  const { login } = useAuth();

  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (email === "machknowsoft@gmail.com" && password === "password123") {
      showToast("Login Successful!", () => {
        login();
        navigate("/user/dashboard");
      });
    } else if (!email) {
      setvalidationEmail("Please enter email");
    } else if (!password) {
      setvalidationPassword("Please enter your password");
    } else {
      showToast("Invalid email or password. Please try again.");
    }
    setLoading(false);
  };

  const showToast = (message, onCloseCallback) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      onClose: onCloseCallback,
    });
  };

  const renderTooltip = (message) => <Tooltip id="tooltip">{message}</Tooltip>;

  return (
    <>
      <Container fluid className="sign-in-container ">
        <Row>
          <Col lg={7} md={7} className="text-start">
            <Image
              src={LogoImage}
              alt="logoImage"
              fluid
              className="logo-image"
            />
            <h1>Login</h1>
            <div className="d-flex justify-content-center">
              <Form onSubmit={handleLoginFormSubmit}>
                <Form.Group controlId={`formBasicemail`}>
                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip(validationemail)}
                    show={validationemail !== null && validationemail !== ""}
                  >
                    <Form.Control
                      className="email-field"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </OverlayTrigger>
                </Form.Group>
                <Form.Group
                  controlId={`formBasicpassword`}
                  className="password-group"
                >
                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip(validationpassword)}
                    show={validationpassword !== null}
                  >
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      className="password-field"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </OverlayTrigger>
                  <div
                    className="password-toggles"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <FaRegEye className="icon text-grey" />
                    ) : (
                      <FaRegEyeSlash className="icon" />
                    )}
                  </div>
                </Form.Group>
                <Button
                  className="sign-in-container-button"
                  type="submit"
                  disabled={loading} // Disable the button when loading
                >
                  {loading ? "Loading..." : "Login"}
                </Button>
              </Form>
            </div>
            <p>
              By clicking Log In you agree to NUE Capital Terms <br></br> &
              Conditions and Key Risks
            </p>
            <p className="secondpara">
              Don’t have an account?
              <LinkContainer to="/auth/signup" style={{ cursor: "pointer" }}>
                <span className="cursor-pointer">Signup</span>
              </LinkContainer>
            </p>
            <p className="copyRight">
              © 2023 MachKnowSoft. All Rights Reserved
            </p>
          </Col>
          <Col lg={5} md={5} className="d-none d-md-block">
            <div className="login-image-container">
              <Image
                src={LoginImage}
                alt="loginImage"
                fluid
                className="login-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
};

export default SignIn;
