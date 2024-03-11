import BannerVertical from "../components/imagegridtext/BannerVertical";
import VisionMissionWrapper from "../warpper/text/VisionMissionWrapper";
import SliderCards from "../components/card/SliderCards";
import GetReady from "../components/text/GetReady";
import Services from "../components/imagegridtext/Services";
import RealStateImageGrid from "../components/imagegridtext/RealStateImageGrid";
import ReatEstateInvestGrid from "../components/imagegridtext/ReatEstateInvestGrid";
import RealStateText from "../components/text/RealStateText";
import OurTeamWrapper from "../warpper/Team/OurTeamWrapper";
function Home() {
  return (
    <div className="mx-auto p-1">
      <BannerVertical />
      <VisionMissionWrapper />
      <Services />
      <RealStateImageGrid />
      <RealStateText />
      <ReatEstateInvestGrid />
      <SliderCards />
      <OurTeamWrapper />
      <GetReady />
    </div>
  );
}

export default Home;
