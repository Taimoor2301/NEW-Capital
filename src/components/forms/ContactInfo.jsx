import React from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { PiPhoneCallFill } from "react-icons/pi";

const ContactInfo = () => {
  return (
    <>
      <h3 className='text-md-start text-center'>Contact Information</h3>
      <h3 className="secondheading text-md-start text-center">Say something to start a live chat!</h3>
      <div className="contactDetails">
        <p><span><PiPhoneCallFill /> </span>+966 3456 789</p>
        <p className="detials"><span><FaEnvelope /></span> contact@nuecapital.com</p>
        <p className="detials"><span><FaMapMarkerAlt /> </span>Office 182, Level 1, Dammam Saudi Arabia</p>
      </div>
    </>
  );
};

export default ContactInfo;
