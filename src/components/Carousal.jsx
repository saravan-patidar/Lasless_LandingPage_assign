import Carousel from "react-bootstrap/Carousel";

const Carousal = () => {
  console.log(Carousel);
  return (
    <Carousel>
      <Carousel.Item>
        <div
          style={{
            width: "300px",
            height: "400px",
            border: "2px solid red",
            color: "black",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          repudiandae fugit rem!
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            width: "300px",
            height: "400px",
            border: "2px solid red",
            color: "black",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          repudiandae fugit rem!
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
export default Carousal;
