import ServicesImage from "../../assests/images/services.svg";
import servicesData from "../../constant/constant";

const Services = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-10">
        <div className="flex-1">
          <img src={ServicesImage} alt="servicesImages" className="img-fluid" />
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <h2 className="font-bold text-3xl lg:pl-4">Our Services</h2>
          <ServicesCardData />
        </div>
      </div>
    </div>
  );
};

export default Services;

const ServicesCardData = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="col-span-1 flex flex-col items-center lg:items-start gap-3 relative px-4"
        >
          <div className="flex items-end lg:relative left-[-15%] mb-[-10%]">
            <img src={service.imgsrc} className="" alt="" />
          </div>
          <h3 className="font-semibold text-xl">{service.title}</h3>
          <p className="">{service.description}</p>
        </div>
      ))}
    </div>
  );
};
