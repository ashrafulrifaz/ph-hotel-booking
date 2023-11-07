import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './review.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard';

const Review = () => {
   const [reviewData, setReviewData] = useState([])

   useEffect(() => {
      axios.get('http://localhost:5000/review')
         .then(res => setReviewData(res.data))
   } , [])

   return (
      <div className="py-10" id='review'>
         <h2 className='text-2xl md:text-3xl font-semibold'>What People Think About Us</h2>
         <div className='hidden lg:block'>
            <Swiper
               slidesPerView={3}
               spaceBetween={30}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper bg-white mt-5"
               >
                  {
                     reviewData && reviewData.map((data, idx) => <SwiperSlide key={idx} className='rounded-xl'><ReviewCard data={data}></ReviewCard></SwiperSlide>)
                  }
               
            </Swiper>
         </div>

         {/* For Tablet */}
         <div className='hidden md:block lg:hidden'>
            <Swiper
               slidesPerView={2}
               spaceBetween={30}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper bg-white mt-5"
               >
                  {
                     reviewData && reviewData.map((data, idx) => <SwiperSlide key={idx} className='rounded-xl'><ReviewCard data={data}></ReviewCard></SwiperSlide>)
                  }
               
            </Swiper>
         </div>

         {/* For Mobile */}
         <div className='md:hidden'>
            <Swiper
               slidesPerView={1}
               spaceBetween={30}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper bg-white mt-5"
               >
                  {
                     reviewData && reviewData.map((data, idx) => <SwiperSlide key={idx} className='rounded-xl'><ReviewCard data={data}></ReviewCard></SwiperSlide>)
                  }
               
            </Swiper>
         </div>
      </div>
   );
};

export default Review;