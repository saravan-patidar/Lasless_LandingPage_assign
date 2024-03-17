import Heading from "./Heading";
import PriceCard from "./PriceCard";
import { cardDetail } from "../utils/constant";
import { headingData } from "../utils/constant";

const Pricing = () => {
  return (
    <div className="container mx-auto">
      <Heading content={headingData?.priceHeadings} />
      <div className="d-flex gap-5 m-5 ">
        <PriceCard cardData={cardDetail?.freePlan} />
        <PriceCard cardData={cardDetail?.standardPlan} />
        <PriceCard cardData={cardDetail?.premiumPlan} />
      </div>
    </div>
  );
};
export default Pricing;
