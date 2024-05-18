import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// react rating style
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../components/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
    <SectionTitle subHading={"---What Our Clients Say---"} hading={"TESTIMONIALS"}></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide>
            <div className="text-center py-20">
              <div>
                <h1 className="flex justify-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                </h1>
                <p>{review.details}</p>
                <h1>{review.name}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
