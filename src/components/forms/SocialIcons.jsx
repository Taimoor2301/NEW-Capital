import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="socialIcon">
      <a href="#" className="socialIconLink">
        <FaTwitter />
      </a>
      <a href="#" className="socialIconLink">
        <FaInstagram />
      </a>
      <a href="#" className="socialIconLink">
        <FaLinkedinIn />
      </a>
      <a href="#" className="socialIconLink">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialIcons;