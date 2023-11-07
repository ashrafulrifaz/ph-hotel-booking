import { useContext } from "react";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/Provider";

const FeaturedRooms = () => {
   const {rooms} = useContext(AuthContext)
   const offerRooms = rooms.filter(room => room.discount !== undefined)

   return (
      <div className='py-12'>
         <h2 className="text-3xl font-semibold capitalize">Enjoy Your Vacation with an exiting discount</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-7">
            {
               offerRooms && offerRooms.map((room, idx) => <RoomCard key={idx} room={room}></RoomCard>).slice(0, 5)
            }
            <div className={`p-5 border border-gray-300 rounded-md items-center flex flex-col justify-center ${offerRooms.length > 3 ? 'block': 'hidden'}`}>
               <Link to={`/rooms`}>
                  <button className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all'>Explore More</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default FeaturedRooms;