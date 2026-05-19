"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const universities = [
  { src: "/tu_logo_web.svg", alt: "TU Darmstadt", isImg: true },
  { src: "/tum.png", alt: "TU München" },
  { src: "/lmuLogo.png", alt: "LMU München" },
  { src: "/aachen.png", alt: "RWTH Aachen" },
  { src: "/tuBerlin.png", alt: "TU Berlin" },
  { src: "/kit.png", alt: "KIT Karlsruhe" },
  { src: "/heidelberg.png", alt: "Heidelberg Üniversitesi" },
  { src: "/bonn.png", alt: "Bonn Üniversitesi" },
  { src: "/bochum.png", alt: "Bochum Üniversitesi" },
  { src: "/humboldt.png", alt: "Humboldt Üniversitesi Berlin" },
  { src: "/fuBerlin.png", alt: "Freie Universität Berlin" },
  { src: "/tuDresden.png", alt: "TU Dresden" },
  { src: "/frankfurt.png", alt: "Goethe Üniversitesi Frankfurt" },
  { src: "/freiburg.png", alt: "Freiburg Üniversitesi" },
  { src: "/hamburg.png", alt: "Hamburg Üniversitesi" },
];

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={40}
      breakpoints={{
        0:    { slidesPerView: 2 },
        640:  { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[Pagination, Navigation, Autoplay]}
      className="pb-10"
    >
      {universities.map((u) =>
        u.isImg ? (
          <SwiperSlide key={u.alt} className="flex items-center justify-center py-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-24 object-contain" src={u.src} alt={u.alt} />
          </SwiperSlide>
        ) : (
          <SwiperSlide key={u.alt} className="flex items-center justify-center py-4">
            <Image className="w-full h-24 object-contain" src={u.src} alt={u.alt} width={300} height={96} />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};
export default SwiperComponent;
