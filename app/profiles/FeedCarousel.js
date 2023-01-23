'use client';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';


export default FeedCarousel;

function FeedCarousel () {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

/*
{ gallery_url_thumbnail, gallery_alt, key }

      <SwiperSlide key={key}>
        <figure>
          <img src={gallery_url_thumbnail} alt={gallery_alt} />
      </figure>
      </SwiperSlide>

*/