import { Swiper, SwiperSlide } from "swiper/react";
import starLogo from "../assets/Group 1161.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousal.css";
import { Navigation, Pagination } from "swiper/modules";
import useFetchRandomUser from "../utils/useFetchRandomUser";
const Carousal = () => {
  const userInfo = useFetchRandomUser("https://randomuser.me/api/?results=7");

  return (
    <div className=" p-3">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {userInfo?.results?.map((user) => {
          const { picture, name, location } = user;
          return (
            <SwiperSlide className="card">
              <div className="p-3 ">
                <div className="d-flex gap-2 align-items-center justify-content-between  text-black ">
                  <img
                    src={picture.thumbnail}
                    className="rounded-5 "
                    alt="img"
                  />
                  <div className="d-flex flex-column ">
                    <span className="fw-bold fs-6">
                      {name.first} {name.last}
                    </span>
                    <span>
                      {location.city}, {location.country}
                    </span>
                  </div>
                  <div>
                    {(Math.random() * (5 - 3) + 3).toFixed(1)}
                    <img src={starLogo} alt="logo" />
                  </div>
                </div>
                <div className="p-3">
                  {
                    userInfo.results.comment[
                      Math.floor(Math.random() * (3 - 0) + 0)
                    ]
                  }
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="button-arrangements">
        <div>
          <div className="swiper-pagination"></div>
        </div>

        <div className="button-swiper">
          <button className="swiper-button-prev"></button>
          <button className="swiper-button-next"></button>
        </div>
      </div>
    </div>
  );
};
export default Carousal;
