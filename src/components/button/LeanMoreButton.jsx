import React from 'react'
import { Button } from 'react-bootstrap'
import { FaChevronRight } from "react-icons/fa6";
import "../../assests/css/learnmorebtn.css"

function LeanMoreButton({ marginTop, marginBottom }) {
  const buttonStyle = {
    marginTop: marginTop,
    marginBottom: marginBottom, // Apply margin for extra small screens initially
  };

  return (
    <div className="text-md-start text-center learn-more">
      <Button style={buttonStyle} className="learnbtn">
        Learn More <FaChevronRight className="icon-alignment" />
      </Button>
    </div>
  );
}

export default LeanMoreButton