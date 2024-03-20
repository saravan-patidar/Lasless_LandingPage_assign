import Heading from "./Heading";
import PriceCard from "./PriceCard";
import { cardDetail } from "../utils/constant";
import { headingData } from "../utils/constant";

const Pricing = () => {
  return (
    <div id="pricing" className="container-md mx-auto">
      <Heading content={headingData?.priceHeadings} />
      <div className="d-flex  flex-wrap flex-md-nowrap gap-md-5 gap-2  m-1 m-md-5 ">
        <PriceCard cardData={cardDetail?.freePlan} label="card1" />
        <PriceCard cardData={cardDetail?.standardPlan} label="card2" />
        <PriceCard cardData={cardDetail?.premiumPlan} label="card3" />
      </div>
    </div>
  );
};
export default Pricing;
