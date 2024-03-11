import "../../assests/css/realStateText.css";
import {
  liquidationSolutionData,
  saudiRealEstateData,
  dealsSelectionContData,
  dealsSelectionData,
  neuData,
} from "../../constant/constant";

const RealStateText = () => {
  return (
    <div className="flex flex-col lg:flex-row pl-7 pr-1 lg:pl-0 gap-5 max-w-7xl mx-auto py-10">
      <section className="lg:w-[65%]">
        <Heading>Liquidation Solution</Heading>
        <ul>
          {liquidationSolutionData.map((i) => {
            return (
              <li className="text-lg list-disc py-1" key={i.id}>
                {i.description}
              </li>
            );
          })}
        </ul>
        <h1 className="font-bold text-themeDarkGreen py-4 text-lg">
          Saudi Real Estate Market
        </h1>
        <div className="flex flex-col gap-3 text-lg">
          {saudiRealEstateData.map((i) => {
            return <span key={i.id}>{i.description}</span>;
          })}
        </div>
      </section>
      <section className="lg:w-[35%]">
        <Heading>Deals Selection</Heading>
        <div className="flex flex-col gap-3 text-lg">
          {dealsSelectionData.map((i) => (
            <span key={i.id}>{i.description}</span>
          ))}
        </div>
        <Heading>Deals Selection Cont.</Heading>
        <div className="flex flex-col gap-3 text-lg">
          {dealsSelectionContData.map((i) => (
            <span key={i.id}>{i.description}</span>
          ))}
        </div>
        <Heading>NUE Fee</Heading>
        <div className="flex flex-col gap-2 text-lg">
          {neuData.map((el) => (
            <div
              key={el.id}
              className="flex w-full justify-between items-center"
            >
              <span>{el.description}</span>
              <span>{el.per}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RealStateText;

// eslint-disable-next-line react/prop-types
const Heading = ({ children }) => {
  return (
    <h1 className="text-3xl text-themeDarkGreen my-3 font-medium">
      {children}
    </h1>
  );
};
