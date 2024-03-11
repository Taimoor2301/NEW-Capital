import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "../../assests/css/getstarted.css";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
function GetReady() {
  const handleContactButtonClick = () => {
    // Scroll to the top when the "Contact Us" button is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="max-w-7xl bg-themeGreenL1 text-center rounded my-10 mx-auto flex gap-5 justify-center items-center flex-col py-10">
      <h1 className="text-themeDarkGreen text-2xl md:text-5xl font-bold">
        Ready to get started?
      </h1>
      <p className="text-themeDarkGreen  md:text-xl">
        Ready To Invest in Real Estate Properties and Landscapes so contact us
        now
      </p>

      <Link
        className="bg-themeDarkGreen text-white md:text-xl py-2 px-5 rounded font-bold "
        to={"/page/contact"}
      >
        Contact Us
      </Link>
    </section>
  );
}

export default GetReady;
