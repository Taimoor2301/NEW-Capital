import React from "react";
import BannerDescription from "../components/imagegridtext/BannerDescription";
import AboutList from "../components/text/AboutList";
import AboutVisionMissionWrapper from "../warpper/text/AboutVisionMissionWrapper";
import GetReady from "../components/text/GetReady";

function About() {
  return (
    <div>
      <BannerDescription
        heading={"NUE Capital"}
        description={
          "Crowdfunding Platform Supporting Presentation CMA FinTech Lab"
        }
      />
      <AboutList />
      <AboutVisionMissionWrapper />
      <GetReady />
    </div>
  );
}

export default About;
