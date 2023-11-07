import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/Provider';
import RoomPageCard from '../RoomPageCard/RoomPageCard';
import Map from '../../HomeComponents/Map/Map';
import upFilter from '../../../assets/up-arrow.gif'
import downFilter from '../../../assets/down-arrow.gif'
import { Link } from 'react-router-dom';

const RoomSection = () => {
   const {rooms} = useContext(AuthContext)
   const [filteredRooms, setFilteredRooms] = useState([])
   const [filter, setFilter] = useState(false)
   const [galleryItems, setGalleryItems] = useState([])
   
   useEffect(() => {
      const galleryItem = rooms.map(room => ({image: room.images[0], id: room._id}))
      setGalleryItems(galleryItem)

      if(!filter) {
         const shortRooms = rooms.slice().sort((a, b) => a.price - b.price)
         setFilteredRooms(shortRooms);
      } else {
         const shortRooms = rooms.slice().sort((a, b) => b.price - a.price)
         setFilteredRooms(shortRooms);
      }
   }, [filter, rooms, galleryItems])

   return (
      <div className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[90%] xl:max-w-[1200px] mx-auto relative" id='rooms'>
         <div className='border border-gray-300 rounded-md sticky lg:h-[85vh] p-4'>
            <div className='flex justify-between items-center'>
               <h2 className='text-xl font-medium'>Display Room By:</h2>
               <div onClick={() => setFilter(!filter)}>
                  {
                     filter ? 
                     <a className="flex cursor-pointer">
                        <img src={upFilter} className='w-7 h-7' alt="" />
                        <p className='font-medium'>Low To High</p>
                     </a>
                     :
                     <a className="flex cursor-pointer">
                        <img src={downFilter} className='w-7 h-7' alt="" />
                        <p className='font-medium'>High To Low</p>
                     </a>
                  }
               </div>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-5'>
               {
                  galleryItems.map((item, idx) => 
                     <Link to={`/rooms/${item.id}`} key={idx} className='cursor-pointer'>
                        <img src={item.image} className='rounded-md' alt="image" />
                     </Link>
                  )
               }
            </div>
            <div className='hidden lg:block'>
               <Map></Map>
            </div>
         </div>
         <div className='col-span-2 space-y-5'>
            {
               filteredRooms && filteredRooms.map((room, idx) => <RoomPageCard key={idx} room={room}></RoomPageCard>)
            }
         </div>
      </div>
   );
};

export default RoomSection;