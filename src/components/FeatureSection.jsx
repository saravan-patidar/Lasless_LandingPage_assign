import userImg from "../assets/Illustration 2.svg";
import checkImg from "../assets/Group 1120.png";
const FeatureSection = () => {
  return (
    <div className="container py-5  mx-auto d-flex align-items-center justify-content-between ">
      <div className="col-6 px-4">
        <img src={userImg} className="w-100 " alt="img" />
      </div>
      <div className="col-6 px-4 ">
        <h2 className=" fw-bold  ">We Provide Many Features You Can Use</h2>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <p>
          <img src={checkImg} alt="" />
          Powerfull online protection.
        </p>
        <p>
          <img src={checkImg} alt="" />
          Internet without borders.
        </p>
        <p>
          <img src={checkImg} alt="" />
          Supercharged VPN No specific time limits.
        </p>
      </div>
    </div>
  );
};
export default FeatureSection;
