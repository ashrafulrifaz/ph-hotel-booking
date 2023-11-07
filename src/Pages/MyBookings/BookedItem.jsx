import PropTypes from 'prop-types';
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const BookedItem = ({booking, setBookings, bookings}) => {
   const {_id, image, title, checkIn, checkOut, price} = booking

   const checkInTime = moment(`${checkIn}`, 'YYYY-MM-DD')
   const todayTime = moment().format('YYYY-MM-DD'); 
   const timeRemaining = checkInTime.diff(todayTime, 'days')

   const handleDeleteItem = (id) => {
      if(timeRemaining >= 1) {
         Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
         }).then((result) => {
            if (result.isConfirmed) {
               axios.delete(`http://localhost:5000/bookings/${id}`)
                  .then(res => {
                     if(res.data.deletedCount > 0) {
                        Swal.fire({
                           position: "top-end",
                           icon: "success",
                           title: "Booking Canceled",
                           showConfirmButton: false,
                           timer: 1500
                        });
                        const remainingBookings = bookings.filter(book => book._id !== _id)
                        setBookings(remainingBookings)
                     }
                  })
            }
         });
      } else {
         Swal.fire({
            position: "top-end",
            icon: "error",
            title: "You Can't Cancel This Booking",
            showConfirmButton: false,
            timer: 1500
         });
      }
   }

   return (
      <li className="border-b border-gray-200 p-5">
         <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <div className="w-full md:w-1/6">
               <img className="w-full md:w-48 h-[100%] rounded-md" src={image} alt="" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full md:w-5/6">
               <div>
                  <div>
                     <h3 className="text-xl lg:text-2xl font-semibold lg:font-medium">{title}</h3>
                  </div>
                  <div>
                     <p className="text-base lg:text-lg font-semibold">Check In Date: <span className="font-medium text-base">{checkIn.slice(0, 10)}</span></p>
                  </div>
                  <div>
                     <p className="text-base lg:text-lg font-semibold">Check Out Date: <span className="font-medium text-base">{checkOut.slice(0, 10)}</span></p>
                  </div>
                  <div>
                     <p className="text-base lg:text-lg font-semibold">Price: <span className="font-medium text-base">${price}</span></p>
                  </div>
               </div>
               <div className="flex gap-3 mt-4 md:mt-0">
                  <Link to={`/room/${_id}`}>
                     <button className="border py-1 px-2 rounded-md border-green-500 hover:bg-green-500 hover:text-white transition font-medium">Update Date</button>
                  </Link>
                  <button onClick={() => handleDeleteItem(_id)} className="border py-1 px-2 rounded-md border-red-500 transition hover:text-white hover:bg-red-500 font-medium">Delete</button>
               </div>
            </div>
         </div>
      </li>
   );
};

BookedItem.propTypes = {
   booking: PropTypes.object,
   setBookings: PropTypes.object,
   bookings: PropTypes.object
}

export default BookedItem;