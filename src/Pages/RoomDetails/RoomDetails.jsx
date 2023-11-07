// Packages
import { useLoaderData, } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";

// Components
import { AuthContext } from "../../Provider/Provider";
import PostReviews from "../../Components/RoomDetailsComponents/PostReviews/PostReviews";
import ReviewsCard from "../../Components/RoomDetailsComponents/ReviewsCard/ReviewsCard";
import BookingConfirmation from "../../Components/RoomDetailsComponents/BookingConfirmation/BookingConfirmation";
import MyRating from "../../Components/Rating/MyRating";
import Slider from "../../Components/RoomDetailsComponents/Slider/Slider";

// Images
import check from '../../assets/badge-check.png'
import sizeImg from '../../assets/wide.png'
import Map from "../../Components/HomeComponents/Map/Map";


const RoomDetails = () => {
   const {user} = useContext(AuthContext)
   const [bookedUserEmail, setBookedUserEmail] = useState([])
   const roomData = useLoaderData()
   const {images, title, description, rating, facilities, price, room_number, discount, quantity} = roomData

   // Booking Time
   const [checkInDate, setCheckInDate] = useState(new Date());
   const tomorrow = new Date()
   tomorrow.setDate(tomorrow.getDate() + 1);
   const [checkOutDate, setCheckOutDate] = useState(tomorrow);

   // Room Quantity
   let [bookedDates, setBookedDates] = useState([])
   const [bookedRoom, setBookedRoom] = useState(null)
   const remainingRoom = quantity - bookedRoom

   // review
   const [reviews, setReviews] = useState([])
   const reviewCount = reviews.length
   
   // price calculation
   const offerPrice = Math.ceil(price - ((price / 100) * discount))
   const checkInTime = moment(`${checkInDate.toISOString()}`, 'YYYY-MM-DD')
   const checkOutTime =  moment(`${checkOutDate.toISOString()}`, 'YYYY-MM-DD')
   const timeDuration = checkOutTime.diff(checkInTime, 'days')
   let totalPrice = price * timeDuration
   if(discount !== undefined){
      totalPrice = offerPrice * timeDuration
      console.log(totalPrice);
   }

   // Room Unavailability
   let disabledDates = [];
   for (const bookedDate of bookedDates) {
      disabledDates.push(new Date(bookedDate));
   }

   useEffect( () => {
      axios.get(`http://localhost:5000/bookings/${room_number}`)
         .then(res => {
            setBookedRoom(res.data.length)      
            const newCheckInDate = res.data.map(date => date.checkIn.slice(0, 10))
            const newCheckOutDate = res.data.map(date => date.checkOut.slice(0, 10))
            const newDates = [...newCheckInDate, ...newCheckOutDate];

            setBookedDates(newDates)
            res.data.map(mail => setBookedUserEmail(mail.email))
         })

      axios.get(`http://localhost:5000/review/${room_number}`)
         .then(res => {
            setReviews(res.data)
         })
   },[room_number])

   return (
      <div className="pt-5 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[90%] xl:max-w-[1200px] mx-auto" id="room_details">
         <div className="col-span-2">
            <div className="space-y-3">  

               {/* Slider */}
               <Slider images={images}></Slider>  
               <h2 className="text-3xl font-semibold">{title}</h2>
               <p className="text-lg">{description}</p>
               <div>
                  {/* Room Info */}
                  <div className="flex items-center gap-2">
                     <img src={check} className="w-5" alt="" />
                     <p className="text-[17px] text-green-400">Flexible cancelation</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                     <img src={check} className="w-5" alt="" />
                     <p className="text-[17px] text-green-400">Breakfast included</p>
                  </div>
                  <div className="flex gap-3 items-center mt-2">
                     <img src={sizeImg} className="w-5" alt="" />
                     <span className="text-lg font-medium">{'size'}</span>
                  </div>

                  {/* Room Facilites */}
                  <h3 className="font-medium text-2xl mt-3">Room Facilities</h3>
                  <div className="flex flex-wrap gap-5 mt-3">
                     {
                        facilities && facilities.map((facility, idx) => 
                           <div key={idx} className="flex gap-3 items-center rounded-xl border border-gray-200 px-4 py-2">
                              <img src={facility?.icon} className="w-8 h-8" alt="" />
                              <p className="font-medium">{facility?.name}</p>
                           </div>
                        )
                     }
                  </div>
               </div>
               <div>
                  {/* MAP */}
                  <Map></Map>
               </div>
               {
                  bookedUserEmail === user?.email && 
                  <PostReviews bookedUserEmail={bookedUserEmail}></PostReviews>
               }
            </div> 
            <div className={`${reviews.length === 0 && "hidden"}`}>
               <h3 className="text-xl font-semibold">People{"'"}s Experiences</h3>
               {
                  reviews.map((review, idx) => <ReviewsCard key={idx} review={review}></ReviewsCard>)
               }
            </div>
         </div>
         <div className="space-y-3">
            <div className="flex gap-2 items-center">
               <MyRating rating={rating}></MyRating>               
               <span className="font-medium">({reviewCount} Reviews)</span>
            </div>
            <div>
               <p className={`${discount !== undefined ? 'inline': 'hidden'} rounded-3xl py-2 px-4 bg-blue-600 text-white text-sm font-medium`}>{discount}% off</p>
               <p className={`text-lg font-medium mt-3 line-through decoration-2 decoration-red-600 ${discount === undefined && 'hidden'}`}>${price} <span className="font-normal">/night</span></p>
               {
                  discount !== undefined ? <p className="text-lg font-medium">${offerPrice} <span className="text-base">/night</span></p> :
                  <p className="text-lg font-medium">${price} <span className="text-base">/night</span></p>
               }
               <p className="text-base font-medium">Including 5% Taxes</p>
               <p className={`text-lg capitalize font-medium ${remainingRoom === 0 && 'text-red-500'}`}>{remainingRoom} rooms available</p>
            </div>
            <div className="space-y-3 py-5">
               <div className="border-gray-300 border py-2 px-3 rounded-md flex gap-3 items-center">
                  <label htmlFor="check-in" className="font-medium text-lg">Check In:</label>
                  <DatePicker excludeDates={disabledDates} selected={checkInDate} onChange={(date) => setCheckInDate(date)} minDate={checkInDate} selectsStart startDate={checkInDate} endDate={checkOutDate} className="focus:outline-none" />
               </div>
               <div className="border-gray-300 border py-2 px-3 rounded-md flex gap-3 items-center">
                  <label htmlFor="check-out" className="font-medium text-lg">Check Out:</label>
                  <DatePicker excludeDates={disabledDates} selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} minDate={checkInDate} selectsEnd startDate={checkInDate} endDate={checkOutDate} className="focus:outline-none" />
               </div>
               <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">Total: ${totalPrice}</p>
                  <BookingConfirmation 
                  checkInDate={checkInDate} 
                  checkOutDate={checkOutDate}                  
                  room_number={room_number} 
                  remainingRoom={remainingRoom} 
                  roomData={roomData}
                  totalPrice={totalPrice}></BookingConfirmation>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RoomDetails;