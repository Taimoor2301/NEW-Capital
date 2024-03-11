import { VisionMissionData } from "../../constant/constant";
import VisionMission from "../../components/text/VisionMission";

function VisionMissionWrapper() {
  return (
    <section className="bg-themeGreenL1 rounded-xl py-12 px-5 flex justify-between flex-col md:flex-row gap-5 max-w-7xl mx-auto my-5">
      {VisionMissionData.map((val) => {
        return (
          <div key={val.id} className="flex-1">
            <VisionMission
              id={val.id}
              heading={val.heading}
              text={val.text}
              imgsrc={val.imgsrc}
            />
            {/* <LeanMoreButton marginTop={marginValue} marginBottom={marginValueBottom} /> */}
          </div>
        );
      })}
    </section>
  );
}

export default VisionMissionWrapper;
