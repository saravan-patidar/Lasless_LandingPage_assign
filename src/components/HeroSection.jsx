import userImg from "../assets/Illustration 1.svg";

const HeroSection = () => {
  return (
    <div className="container-md py-2 py-md-3  mx-auto d-flex flex-wrap-reverse flex-md-nowrap  align-items-center justify-content-center justify-content-md-between">
      <div className="px-4 ">
        <p className=" big_title  fw-normal ">
          Want anything to be easy with <strong>LaslesVPN</strong>
        </p>
        <p>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </p>
        <button className="px-5 py-3 fw-bold rounded-3 button2 ">
          Get Started
        </button>
      </div>
      <div className=" px-2">
        <img src={userImg} className="w-100 " alt="img" />
      </div>
    </div>
  );
};
export default HeroSection;
