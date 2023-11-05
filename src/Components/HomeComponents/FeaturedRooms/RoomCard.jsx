import Rating from "react-rating";
import { Link } from "react-router-dom";

const RoomCard = ({room}) => {
   const {_id, images, title, discount, rating, price, facilities} = room

   return (
      <div className="relative">
         <img src={images[0]} className="rounded-md rounded-b-none w-full h-auto" alt="room" />
         <div className="border border-gray-200 border-t-0 p-3 rounded-b-md space-y-2">
            <div className="flex items-center justify-between">
               <h3 className="text-xl font-semibold">{title}</h3>
               <div className="flex items-center gap-2">
                  <Rating
                     emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px] text-yellow-400">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                     ></path>
                     </svg>}
                     fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-yellow-400">
                     <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                     ></path>
                     </svg>}
                     fractions={2}
                     initialRating={rating}
                     readonly
                  />
                  <span className="text-gray-900 mb-1">({rating})</span>
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

export default RoomCard;