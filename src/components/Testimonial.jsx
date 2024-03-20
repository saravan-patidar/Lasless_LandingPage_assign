import { headingData } from "../utils/constant";
import Carousal from "./Carousal";
import Heading from "./Heading";

const Testimonial = () => {
  return (
    <div id="testimonials" className="container mx-auto">
      <Heading content={headingData?.testimonialHeadings} />
      <Carousal />
    </div>
  );
};
export default Testimonial;
