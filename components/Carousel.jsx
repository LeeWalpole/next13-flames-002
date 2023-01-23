// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousel ()  {
  return (
    <>    
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: false }}
    >
      <SwiperSlide><img src="https://www.alphafa.com/wp-content/uploads/2018/09/placeholder-square.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://www.alphafa.com/wp-content/uploads/2018/09/placeholder-square.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://www.alphafa.com/wp-content/uploads/2018/09/placeholder-square.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://www.alphafa.com/wp-content/uploads/2018/09/placeholder-square.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://www.alphafa.com/wp-content/uploads/2018/09/placeholder-square.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://www.alphafa.com/wp-content/uploads/2018/09/placeholder-square.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://www.alphafa.com/wp-content/uploads/2018/09/placeholder-square.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://www.alphafa.com/wp-content/uploads/2018/09/placeholder-square.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://www.alphafa.com/wp-content/uploads/2018/09/placeholder-square.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://www.alphafa.com/wp-content/uploads/2018/09/placeholder-square.jpg" /></SwiperSlide>
    </Swiper>
    </>
  );
};

export default Carousel