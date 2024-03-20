import itemImg from "../assets/Free.svg";
const PriceCard = ({ cardData, label }) => {
  const { subHeading, features, price } = cardData;
  return (
    <>
      <input
        type="radio"
        name="price"
        id={label}
        className="pricing_card d-none "
      />
      <label
        htmlFor={label}
        className=" card p-md-5 -1 align-content-center flex-grow-1 flex-shrink-1  justify-content-between "
      >
        <div>
          <div className="text-center w-50 mx-auto">
            <img src={itemImg} alt="" className="w-100" />
          </div>
          <div className="py-4 ">
            <h5 className="text-center">{subHeading}</h5>
            <ul className="list-unstyled ">
              {features.map((feature) => (
                <li>
                  <span className="px-2 fs-4 text-success ">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="fs-3">
            <span className="fw-bolder ">
              {price === 0 ? "Free" : `$${price}`}
            </span>{" "}
            <span>/mo</span>
          </p>
          <button className="px-4 py-2 rounded-5 button1 ">Select</button>
        </div>
      </label>
    </>
  );
};
export default PriceCard;
