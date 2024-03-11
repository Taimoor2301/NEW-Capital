/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { ApplicationInterfaceSliderData } from "../../constant/constant";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { register } from "swiper/element/bundle";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
// register Swiper custom elements
register();

function SliderCards() {
  const container = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16">
      <h1 className="font-bold text-themeDarkGreen text-3xl pb-5">
        Featured Properties
      </h1>

      <div className="relative">
        <swiper-container
          ref={container}
          slides-per-view={width < 600 ? "1" : width < 1000 ? "2" : "3"}
          speed="500"
          loop="true"
          space-between="30"
        >
          {ApplicationInterfaceSliderData.map((i, index) => (
            <Slide
              key={index}
              {...i}
              rating={4.9}
              location="Riyadh, Saudi Arabia"
              price={"sar 290"}
              category={"Luxary Villa"}
            />
          ))}
        </swiper-container>
        <button
          className="absolute left-0 top-[50%] -translate-y-1/2 z-[1000]"
          onClick={() => container.current.swiper.slidePrev()}
        >
          <FaChevronCircleLeft className="text-themeDarkGreen text-3xl bg-white rounded-full" />
        </button>
        <button
          className="absolute right-0 top-[50%] -translate-y-1/2 z-[1000]"
          onClick={() => container.current.swiper.slideNext()}
        >
          <FaChevronCircleRight className="text-themeDarkGreen text-3xl bg-white rounded-full" />
        </button>
      </div>
    </section>
  );
}

const Slide = ({ imgsrc, title, category, rating, location, price }) => {
  return (
    <swiper-slide>
      <div className="grid grid-cols-1 sm:grid-cols-2 rounded-3xl shadow-[0_0_5px] shadow-gray-300 my-2 mx-1">
        <div className="overflow-hidden col-span-1 p-2 flex justify-center items-center">
          <img
            src={imgsrc}
            alt="image"
            className="object-cover w-full h-full max-w-[250px] rounded-xl"
          />
        </div>
        <div className="col-span-1 flex flex-col justify-between items-center sm:items-start gap-2 p-2">
          <span className="text-white bg-themeDarkGreen rounded-xl py-1 px-2 w-max text-xs">
            {category}
          </span>
          <h3 className="text-themeDarkGreen text-xl font-semibold">{title}</h3>
          <div className="flex items-center gap-1">
            <FaStar className="text-themeYellow" />
            <span className="text-themeDarkGreen font-semibold">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-themeDarkGreen" />
            <span className="text-themeDarkGreen">{location}</span>
          </div>
          <span className="uppercase text-xl font-semibold text-themeDarkGreen">
            {price}
          </span>
        </div>
      </div>
    </swiper-slide>
  );
};

export default SliderCards;
