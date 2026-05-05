"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      
      
      breakpoints={{
      0: {
      slidesPerView: 1, // 0px'den büyük ekranlarda 1 resim
      },
      640: {
      slidesPerView: 2, // sm: 2 resim
      },
      1024: {
      slidesPerView: 3, // lg: 3 resim
      },
  }}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
      loop={true}
      autoplay={{
      delay: 2000, 
      disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      
    >
      <SwiperSlide ><img className="w-full h-auto object-contain rounded-xl" src="./tu_logo_web.svg" alt="" /></SwiperSlide>
      <SwiperSlide ><img className="w-full h-auto object-contain rounded-xl" src="./tum.png" alt="" /></SwiperSlide>
      <SwiperSlide ><img className="w-full h-auto object-contain rounded-xl" src="./lmuLogo.png" alt="" /></SwiperSlide>
      <SwiperSlide ><img className="w-full h-auto object-contain rounded-xl" src="./aachen.png" alt="" /></SwiperSlide>
      <SwiperSlide ><img className="w-full h-auto object-contain rounded-xl" src="./tuBerlin.png" alt="" /></SwiperSlide>
      <SwiperSlide ><img className="w-auto h-auto object-contain rounded-xl" src="./kit.png" alt="" /></SwiperSlide>
      <SwiperSlide ><img className="w-full h-auto object-contain rounded-xl" src="./heidelberg.png" alt="" /></SwiperSlide>
      <SwiperSlide ><img className="w-full h-auto object-contain rounded-xl" src="./bonn.png" alt="" /></SwiperSlide>
      <SwiperSlide ><img className="w-full h-auto object-contain rounded-xl" src="./bochum.png" alt="" /></SwiperSlide>
    </Swiper>
  );
};
export default SwiperComponent;
