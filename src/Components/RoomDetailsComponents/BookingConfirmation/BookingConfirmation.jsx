import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/Provider";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const BookingConfirmation = ({checkInDate, checkOutDate, remainingRoom, roomData, totalPrice}) => {
   const {user} = useContext(AuthContext)
   const {images, title, price, room_number} = roomData
   const navigate = useNavigate()

   const handleNewBooking = () => {
      const bookedItem = {
         image: images[0], title, email: user.email, checkIn: checkInDate, checkOut: checkOutDate, price, room_number
      }
      if(remainingRoom >= 1) {
         axios.post("https://hotel-booking-server-side.vercel.app/bookings", bookedItem)
         .then(res => {
            if(res.data.insertedId){
               navigate('/rooms')
               Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Booked Room Successful',
                  showConfirmButton: false,
                  timer: 3000
               })
            }
         })
      }
   }

   return (
      <div>
         <a className={`capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all cursor-pointer ${((checkInDate === null && checkOutDate === null)) && 'pointer-events-none'}`} onClick={()=> {
            user ? 
            document.getElementById('my_modal_3').showModal()
            : 
            navigate('/signin')
         }}>Book a room</a>
         <dialog id="my_modal_3" className={`modal w-5/6 md:w-4/6 lg:w-2/6 mx-auto`}>
            {
               remainingRoom < 1 ? 
               <div className="modal-box">
                  <form method="dialog">
                     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <div>
                     <h2 className="text-xl font-semibold text-red-600">No Rooms Available Right Now</h2>
                  </div>
               </div>
               :
               <div className="modal-box">
                  <form method="dialog">
                     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <div className="space-y-2">
                     <h2 className="text-xl font-medium">{title}</h2>
                     {
                        checkInDate !== null && <h3 className="text-lg font-medium">Check In Date: <span className="font-normal">{checkInDate.toString().slice(0, 16)}</span></h3>
                     }
                     {
                        checkOutDate !== null && <h3 className="text-lg font-medium">Check Out Date: <span className="font-normal">{checkOutDate.toString().slice(0, 16)}</span></h3>
                     }
                     <h3 className="text-lg font-medium">${totalPrice}<span className="text-base"> including taxes</span></h3>
                     <button onClick={handleNewBooking} className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all mt-2'>Confirm Booking</button>
                  </div>
               </div>
            }
         </dialog>
      </div>
   );
};

BookingConfirmation.propTypes = {
   checkInDate: PropTypes.object,
   checkOutDate: PropTypes.object,
   remainingRoom: PropTypes.object,
   roomData: PropTypes.object,
   totalPrice: PropTypes.object,
}

export default BookingConfirmation;