import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle subHading={"---From 11:00am to 10:00pm---"} hading={"ORDER ONLINE"}></SectionTitle>
      </section>
      <section>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-center flex-col items-center">
              <img src={slider1} alt="" />
              <h1>Salat</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center flex-col items-center">
              <img src={slider2} alt="" />
              <h1>Soups</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center flex-col items-center">
              <img src={slider3} alt="" />
              <h1>Pizzas</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center flex-col items-center">
              <img src={slider4} alt="" />
              <h1>Desserts</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center flex-col items-center">
              <img src={slider5} alt="" />
              <h1>Salat</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
