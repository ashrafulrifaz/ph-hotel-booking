import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import { Link } from "react-router-dom";

const MyBookings = () => {
   const [bookings, setBookings] = useState([])
   const {user} = useContext(AuthContext)
   console.log(bookings);
   
   useEffect(() => {
      axios.get(`http://localhost:5000/bookings?email=${user?.email}`)
         .then(res => setBookings(res.data))
   }, [user])

   return (
      <div className="py-10 max-w-[1200px] mx-auto" id="my_bookings">
         <div>
            <h2 className="text-2xl font-medium">Your Bookings</h2>
            <ul className="mt-5 border border-gray-300 rounded-md">
               {
                  bookings.length > 0 ? 
                  bookings.map((booking, idx) =>
                  <li key={idx} className="border-b border-gray-200 p-5">
                     <div className="flex gap-8 items-center">
                        <div className="w-1/6">
                           <img className="w-48 h-auto rounded-md" src={booking?.image} alt="" />
                        </div>
                        <div className="flex items-center justify-between w-5/6">
                           <div>
                              <div>
                                 <h3 className="text-2xl font-medium">{booking?.title}</h3>
                              </div>
                              <div>
                                 <p className="text-xl font-semibold">Check In Date: <span className="font-medium text-lg">{booking?.checkIn}</span></p>
                              </div>
                              <div>
                                 <p className="text-xl font-semibold">Check In Date: <span className="font-medium text-lg">{booking?.checkOut}</span></p>
                              </div>
                              <div>
                                 <p className="text-xl font-semibold">Price: <span className="font-medium text-lg">${booking?.price}</span></p>
                              </div>
                           </div>
                           <div className="grid gap-3">
                              <Link to={`/${booking._id}`}>
                                 <button className="border py-1 px-2 rounded-md border-green-500 hover:bg-green-500 hover:text-white transition font-medium">Update</button>
                              </Link>
                              <button className="border py-1 px-2 rounded-md border-red-500 transition hover:text-white hover:bg-red-500 font-medium">Delete</button>
                           </div>
                        </div>
                     </div>
                  </li>
                  ) :
                  <p className="text-center my-3 text-xl font-medium">No bookings found</p>
               }
            </ul>
         </div>
      </div>
   );
};

export default MyBookings;