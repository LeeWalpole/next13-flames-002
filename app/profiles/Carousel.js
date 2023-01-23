'use client';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Carousel ({ images })  {
  return (
    <>    
    <Swiper>
      {images.map((image) => (
      <SwiperSlide key={index}>
        <img src={image.url_full} alt={image.url_full} />
      </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default Carousel

/*

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="https://www.alphafa.com/wp-content/uploads/2018/09/placeholder-square.jpg" /></SwiperSlide>
    </Swiper>

*/