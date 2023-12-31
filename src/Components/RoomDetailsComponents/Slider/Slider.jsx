import PropTypes from 'prop-types';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css';

const Slider = ({images}) => {
   return (
      <div data-aos="fade-in">
         <Swiper
            spaceBetween={30}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            >
               {
                  images && images.map((data, idx) => 
                  <SwiperSlide key={idx} className='rounded-xl'>
                     <img id='slider_image' className="w-full rounded-xl" src={data} alt="room" />
                  </SwiperSlide>
                  )
               }                     
         </Swiper>
      </div> 
   );
};

Slider.propTypes = {
   images: PropTypes.object
}

export default Slider;