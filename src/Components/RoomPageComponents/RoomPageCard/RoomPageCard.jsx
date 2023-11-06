import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const RoomPageCard = ({room}) => {
   const {_id, title, facilities, description, images, price, discount} = room

   return (
      <div className="rounded-md border border-gray-300 p-5">
         <div className="flex justify-between gap-5">
            <div className="w-[30%] relative">
               <img src={images[0]} className="w-full h-full rounded-md" alt="" />
               <p className={`${discount ? 'block' : 'hidden'} top-2 right-2 absolute bg-blue-600 rounded-md py-1 px-2 text-[15px] text-white font-medium`}>{discount}% off</p>
            </div>
            <div className="w-[67%]">
               <h2 className="text-2xl font-semibold">{title}</h2>
               <p>{description}</p>
               <div className="flex gap-4">
                  {
                     facilities && facilities.map((facility, idx) => 
                        <div key={idx} className="flex gap-3 items-center my-2 flex-grow-0">
                           <img src={facility?.icon} className="w-8 h-8" alt="" />
                           <p className="font-medium">{facility?.name}</p>
                        </div>
                     ).slice(0, 4)
                  }
               </div>
               <p className="font-medium">${price}<span className="font-normal">/night</span></p>
               <Link to={`/rooms/${_id}`}>
                  <button className='mt-3 capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all'>See Availability</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

RoomPageCard.propTypes = {
   room: PropTypes.object
}

export default RoomPageCard;