import realEstateInvestImage from "../../assests/images/realEstateInvestImage.svg";
import { FaArrowRight } from "react-icons/fa6";

const ReatEstateInvestGrid = () => {
  return (
    <section className="max-w-7xl mx-auto bg-themeGreenL1 rounded grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1">
        <img src={realEstateInvestImage} alt="Images" />
      </div>
      <div className="col-span-1 flex flex-col gap-3 p-3 lg:p-5 justify-evenly">
        <h1 className="text-sm font-bold text-themeDarkGreen">REAL ESTATE</h1>
        <h1 className="text-3xl lg:text-5xl text-themeDarkGreen">
          Invest in the real Estate
        </h1>
        <p className="lg:text-xl text-themeDarkGreen">
          NUE is one of the 50 largest real estate private equity investors in
          the world by total annual deployment — deploying more than $1 billion
          of capital annually in 2021 and 2022. Our portfolio is largely
          composed of 20,000+ well-located residential units and e
          Commerce-centric industrial assets.
        </p>
        <p className="font-bold text-themeDarkGreen lg:text-lg flex items-center gap-3 cursor-pointer">
          Explore our real estate portfolio
          <span>
            <FaArrowRight />
          </span>
        </p>
      </div>
    </section>
  );
};

export default ReatEstateInvestGrid;
