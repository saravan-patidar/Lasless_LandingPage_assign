import sponsoredImg from "../assets/Sponsored.svg";
const Card2 = ({ image, subscribe }) => {
  return (
    <div className="card2 container  ">
      {image && <img src={image} className="w-100" alt="img" />}
      {subscribe && (
        <div className="d-flex justify-content-between h-100  p-2 align-items-center ">
          <div className="">
            <span className="fw-bolder fs-2 ">{subscribe.title}</span>
            <br />
            <span>{subscribe.subTitle}</span>
          </div>
          <button className="py-2 px-4 border-0 rounded-4">
            Subscribe Now
          </button>
        </div>
      )}
    </div>
  );
};
export default Card2;
