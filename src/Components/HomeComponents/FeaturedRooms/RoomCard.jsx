import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MyRating from '../../Rating/MyRating';

const RoomCard = ({room}) => {
   const {_id, images, title, discount, rating, price, facilities, room_number} = room
   const [reviews, setReviews] = useState([])

   useEffect(() => {
      axios.get(`https://hotel-booking-server-side.vercel.app/review/${room_number}`)
         .then(res => {
            setReviews(res.data)
         })
   }, [room_number])

   return (
      <div data-aos="zoom-out" className="relative">
         <img src={images[0]} className="rounded-md rounded-b-none w-full h-48 lg:h-60" alt="room" />
         <div className="border border-gray-200 border-t-0 p-3 rounded-b-md space-y-2">
            <div className="flex items-center justify-between">
               <h3 className="text-xl font-semibold">{title}</h3>
               <div className="flex items-center gap-2">
                  <MyRating rating={rating}></MyRating>
                  <span className="text-gray-900 mb-1">({reviews.length})</span>
               </div>
            </div>
            <div className="flex gap-5 mt-3">
               {
                  facilities && facilities.map((facility, idx) => 
                     <div key={idx} className="flex gap-3 items-center my-2 flex-grow-0">
                        <img src={facility?.icon} className="w-8 h-8" alt="" />
                        <p className="font-medium">{facility?.name}</p>
                     </div>
                  ).slice(0, 2)
               }
            </div>
            <div className="flex justify-between items-center">
               <p className="text-lg font-medium">${price} <span className="text-base font-normal">/night</span></p>
               <Link to={`/rooms/${_id}`}>
                  <button className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all'>See Availability</button>
               </Link>
            </div>
         </div>
         <div className={`absolute py-1.5 px-3 rounded-md top-2 right-2 bg-blue-600 text-white font-medium ${discount ? 'block' : 'hidden'}`}>{discount}% Off</div>
      </div>
   );
};

RoomCard.propTypes = {
   room: PropTypes.object
}

export default RoomCard;