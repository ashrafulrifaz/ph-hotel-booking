import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import updateDate from '../../assets/update-date.jpg'
import arrowImg from '../../assets/arrow-small-right.png'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateBooking = () => {
   const roomData = useLoaderData()
   const {id} = useParams()
   const {room_number, checkIn, checkOut, price} = roomData
   const [checkInDate, setCheckInDate] = useState(new Date(checkIn.toString().slice(0, 10)));
   const [checkOutDate, setCheckOutDate] = useState(new Date(checkOut.toString().slice(0, 10)));
   let [bookedDates, setBookedDates] = useState([])
   const navigate = useNavigate()

   useEffect(() => {
      axios.get(`http://localhost:5000/bookings/${room_number}`)
         .then(res => {    
            const newCheckInDate = res.data.map(date => date.checkIn.slice(0, 10))
            const newCheckOutDate = res.data.map(date => date.checkOut.slice(0, 10))
            const newDates = [...newCheckInDate, ...newCheckOutDate];

            setBookedDates(newDates)
         })
   }, [room_number])

   let disabledDates = [];
   for (const bookedDate of bookedDates) {
      disabledDates.push(new Date(bookedDate));
   }

   const handleUpdateBooking = () => {
      const updateInfo = {
         checkIn: checkInDate.toISOString(), checkOut: checkOutDate.toISOString()
      }
      axios.put(`http://localhost:5000/user-bookings/${id}`, updateInfo)
         .then(res => {
            if(res.data.modifiedCount > 0) {
               Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Booking Info Updated Successfull',
                  showConfirmButton: false,
                  timer: 3000
               })
               navigate('/my-bookings')
            } else {
               Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: 'Everything Updated',
                  showConfirmButton: false,
                  timer: 3000
               })
            }
         })
   }

   return (
      <div className="bg-[#EFF3FF]">
         <div className="max-w-[1000px] mx-auto py-10 h-[88vh] grid grid-cols-2 gap-10 items-center">
            <div>
               <img src={updateDate} alt="" />
            </div>
            <div>
               <div className="w-full p-6 bg-white drop-shadow-xl rounded-lg">
                  <h2 className="text-xl font-semibold">Update Your Booking Info</h2>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                     <div className="">
                        <label htmlFor="check-in" className="font-medium text-lg">Check In</label>
                        <DatePicker excludeDates={disabledDates} selected={checkInDate} onChange={(date) => setCheckInDate(date)} className="focus:outline-none bg-gray-100 py-2 px-4 rounded-md mt-1 w-11/12" />
                     </div>
                     <div className="">
                        <label htmlFor="check-in" className="font-medium text-lg">Check Out</label>
                        <DatePicker excludeDates={disabledDates} selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} className="focus:outline-none bg-gray-100 py-2 px-4 rounded-md mt-1 w-11/12" />
                     </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                     <p className="text-lg font-semibold">Price</p>
                     <img src={arrowImg} className="w-5" alt="" />
                     <p className="text-lg font-medium">${price}</p>
                  </div>
                  <button onClick={handleUpdateBooking} className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all mt-4'>Update</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UpdateBooking;