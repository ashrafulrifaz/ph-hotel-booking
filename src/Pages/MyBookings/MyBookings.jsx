import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import BookedItem from "./BookedItem";
import { Helmet } from "react-helmet-async";

const MyBookings = () => {
   const [bookings, setBookings] = useState([])
   const {user} = useContext(AuthContext)
   
   useEffect(() => {
      axios.get(`https://hotel-booking-server-side.vercel.app/bookings?email=${user?.email}`,{withCredentials:true})
         .then(res => setBookings(res.data))
   }, [user])

   return (
      <div className="py-10 max-w-[90%] xl:max-w-[1200px] mx-auto" id="my_bookings">         
         <Helmet>
            <title>My Bookings - Midnight Mirage Hotel</title>
         </Helmet>
         <div>
            <h2 className="text-2xl font-semibold">Your Bookings</h2>
            <ul className="mt-5 border border-gray-300 rounded-md">
               {
                  bookings.length > 0 ? 
                  bookings.map((booking, idx) =>
                     <BookedItem key={idx} booking={booking} setBookings={setBookings} bookings={bookings}></BookedItem>
                  ) :
                  <p className="text-center my-3 text-xl font-medium">No bookings found</p>
               }
            </ul>
         </div>
      </div>
   );
};

export default MyBookings;