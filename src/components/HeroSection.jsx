import userImg from "../assets/Illustration 1.svg";

const HeroSection = () => {
  return (
    <div className="container py-5  mx-auto d-flex align-items-center justify-content-between ">
      <div className="col-6 px-4 ">
        <p className=" big_title  fw-normal  ">
          Want anything to be easy with <strong>LaslesVPN</strong>
        </p>
        <p>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </p>
        <button className="px-5 py-2 rounded-3">Get Started</button>
      </div>
      <div className="col-6 px-2">
        <img src={userImg} className="w-100 " alt="img" />
      </div>
    </div>
  );
};
export default HeroSection;
