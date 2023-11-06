import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Provider";

const MyBookings = () => {
   const [bookings, setBookings] = useState([])
   const {user} = useContext(AuthContext)
   console.log(bookings);
   
   useEffect(() => {
      axios.get(`http://localhost:5000/bookings?email=${user?.email}`)
         .then(res => setBookings(res.data))
   }, [user])

   return (
      <div>
         <h2 className="">{bookings.length}</h2>
      </div>
   );
};

export default MyBookings;