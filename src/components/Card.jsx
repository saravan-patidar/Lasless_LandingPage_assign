import icon1 from "../assets/user.svg";
const Card = () => {
  return (
    <div className="group-card container  ">
      <div className="d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap ">
        <img src={icon1} alt="" />
        <span className="px-3">
          <strong className="fs-3 lh-sm ">90+</strong>
          <br /> Users
        </span>
      </div>
      <span className="line"></span>
      <div className="d-flex align-items-center justify-content-center  flex-wrap flex-md-nowrap ">
        <img src={icon1} alt="" />
        <span className="px-3">
          <strong className="fs-3 lh-sm ">30+</strong>
          <br /> Locations
        </span>
      </div>
      <span className="line"></span>
      <div className="d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap  ">
        <img src={icon1} alt="" />
        <span className="px-3">
          <strong className="fs-3 lh-sm ">50+</strong>
          <br /> Servers
        </span>
      </div>
    </div>
  );
};
export default Card;
