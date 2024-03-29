import Heading from "./Heading";
import { headingData } from "../utils/constant";
import mapImg from "../assets/Huge Global.svg";

const Global = () => {
  return (
    <div className="container mx-auto">
      <Heading content={headingData?.globalHeadings} />
      <div>
        <img src={mapImg} alt="" className="w-100" />
      </div>
    </div>
  );
};
export default Global;
