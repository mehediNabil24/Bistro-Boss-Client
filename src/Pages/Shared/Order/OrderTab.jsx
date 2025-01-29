import React from "react";
import OrderCard from "../../../Components/OrderCard/OrderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { auth } from "../../../firebase/firebase.config";
const OrderTab = ({ items }) => {
  const {user} = auth;
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="md:grid grid-cols-3 gap-10 my-8">
          {items?.map((item) => (
            <OrderCard key={item._id} item={item}></OrderCard>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderTab;
