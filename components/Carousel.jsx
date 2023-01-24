import Image from 'next/image'
import React, { useRef, useState, useEffect } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




function Carousel ({ images })  {





  return (
    <>
    <Swiper 
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}

    >
      {images.map((image, index) => (
      <SwiperSlide key={index}>
        <Image src={image.url_full} alt="Alt Text" width="500" height="500" unoptimized  />
      </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};
export default Carousel


