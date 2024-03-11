/* eslint-disable react/prop-types */
function VisionMission({ imgsrc, heading, text }) {
  return (
    <div className="flex flex-col gap-4 items-center md:items-start">
      <div className="flex items-center gap-3">
        <img src={imgsrc} className="w-16" />
        <h2 className="text-4xl">{heading}</h2>
      </div>

      <p className="text-lg">{text}</p>
    </div>
  );
}

export default VisionMission;
