import sponsoredImg from "../assets/Sponsored.svg";
const Card2 = ({ image, subscribe }) => {
  return (
    <div className="card2 container  ">
      {image && <img src={image} className="w-100" alt="img" />}
      {subscribe && (
        <div className="d-flex flex-wrap flex-md-nowrap  justify-content-center justify-content-md-between   h-100  p-4 align-items-center ">
          <div className="">
            <span className="fw-bolder fs-md-2  ">{subscribe.title}</span>
            <br />
            <span>{subscribe.subTitle}</span>
          </div>
          <button className="py-2 px-4 fw-bold rounded-4 button2 ">
            Subscribe Now
          </button>
        </div>
      )}
    </div>
  );
};
export default Card2;
