import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import BookedItem from "./BookedItem";

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
                     <BookedItem key={idx} booking={booking}></BookedItem>
                  ) :
                  <p className="text-center my-3 text-xl font-medium">No bookings found</p>
               }
            </ul>
         </div>
      </div>
   );
};

export default MyBookings;