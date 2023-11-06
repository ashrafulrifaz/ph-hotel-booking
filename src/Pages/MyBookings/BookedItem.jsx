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
         <div className="flex gap-8 items-center">
            <div className="w-1/6">
               <img className="w-48 h-auto rounded-md" src={image} alt="" />
            </div>
            <div className="flex items-center justify-between w-5/6">
               <div>
                  <div>
                     <h3 className="text-2xl font-medium">{title}</h3>
                  </div>
                  <div>
                     <p className="text-xl font-semibold">Check In Date: <span className="font-medium text-lg">{checkIn.slice(0, 10)}</span></p>
                  </div>
                  <div>
                     <p className="text-xl font-semibold">Check Out Date: <span className="font-medium text-lg">{checkOut.slice(0, 10)}</span></p>
                  </div>
                  <div>
                     <p className="text-xl font-semibold">Price: <span className="font-medium text-lg">${price}</span></p>
                  </div>
               </div>
               <div className="flex gap-3">
                  <Link to={`/room/${_id}`}>
                     <button className="border py-1 px-2 rounded-md border-green-500 hover:bg-green-500 hover:text-white transition font-medium">View</button>
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