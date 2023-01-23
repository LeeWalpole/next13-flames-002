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
    <Swiper>
      {images.map((image, index) => (
      <SwiperSlide key={index}>
        <img src={image.url_full} alt={image.url_full} />
      </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};
export default Carousel