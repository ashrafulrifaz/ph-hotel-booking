import { useLoaderData, useNavigate } from "react-router-dom";
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './roomdetails.css';
import Rating from "react-rating";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useContext, useEffect, useRef, useState } from "react";
import check from '../../assets/badge-check.png'
// import AdditionalServices from "../../Components/RoomDetailsComponents/AdditionalServices/AdditionalServices";
import sizeImg from '../../assets/wide.png'
// import leftImg from '../../assets/less-than.png'
import { AuthContext } from "../../Provider/Provider";
import axios from "axios";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


const RoomDetails = () => {
   const {user} = useContext(AuthContext)
   const roomData = useLoaderData()
   const {_id, images, title, description, rating, facilities, price, room_number} = roomData
   const mapRef = useRef(null)
   const tomorrowDate = new Date()
   tomorrowDate.setDate(new Date ().getDate() + 1)
   const [checkInDate, setCheckInDate] = useState(new Date());
   const [checkOutDate, setCheckOutDate] = useState(tomorrowDate);

   console.log(typeof checkInDate.toString());
   // const [total, setTotal] = useState(price)
   const navigate = useNavigate()

   const [bookedDates, setBookedDates] = useState([])
   
   const offerPrice = Math.ceil(price - ((price / 100) * 20))
   const totalPrice = Math.ceil(price + ((price / 100) * 5))
   const disabledDates = [
      new Date('2023-11-20'),
      new Date('2023-11-25'),
      new Date('2023-12-02'),
      // Add more dates to this array as needed
    ];

   useEffect( () => {
      axios.get(`http://localhost:5000/bookings/${room_number}`)
         .then(res => setBookedDates(res.data))

      if(!mapRef.current){
         mapRef.current = L.map('hotel-map').setView([24.8949, 91.8687], 16);
         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);
         
         mapRef.current.whenReady(() => {
            const marker = L.marker([24.8949, 91.8687]).addTo(mapRef.current);
            marker.bindPopup('Midnight Mirage Hotel').openPopup();
          });
      }      
   },[room_number])

   const handleNewBooking = () => {
      const bookedItem = {
         image: images[0], title, email: user.email, checkIn: checkInDate, checkOut: checkOutDate, room_id: _id, price, room_number
      }
      axios.post("http://localhost:5000/bookings", bookedItem)
         .then(res => {
            if(res.data.insertedId){
               Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Login Successful',
                  showConfirmButton: false,
                  timer: 3000
               })
            }
         })
   }

   return (
      <div className="pt-5 pb-20 grid grid-cols-3 gap-10 max-w-[1200px] mx-auto" id="room_details">
         <div className="col-span-2">
            <div className="space-y-3">    
               <div>

                  <Swiper
                     spaceBetween={30}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     pagination={{
                        clickable: true,
                     }}
                     navigation={true}
                     modules={[Autoplay, Navigation]}
                     className="mySwiper"
                     >
                        {
                           images && images.map((data, idx) => 
                           <SwiperSlide key={idx} className='rounded-xl'>
                              <img style={{height: '450px'}} className="w-full rounded-xl" src={data} alt="room" />
                           </SwiperSlide>
                           )
                        }
                     
                  </Swiper>

               </div>           
               <h2 className="text-3xl font-semibold">{title}</h2>
               <p className="text-lg">{description}</p>
               <div>
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
                  <div id="hotel-map" className='h-[400px] rounded-md mt-10'></div>
               </div>
            </div> 
         </div>
         <div className="space-y-3">
            <div className="flex items-center gap-2">
               <Rating
                  emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-400">
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  ></path>
                  </svg>}
                  fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
                  <path
                     fillRule="evenodd"
                     d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                     clipRule="evenodd"
                  ></path>
                  </svg>}
                  fractions={2}
                  initialRating={rating}
                  readonly
               />
               <span>({rating})</span>
            </div>
            <div>
               <p className="inline rounded-3xl py-2 px-4 bg-blue-600 text-white text-sm font-medium">{}% off</p>
               <p className="text-lg font-medium mt-3 line-through decoration-2 decoration-red-600">${price} <span className="font-normal">/night</span></p>
               <p className="text-lg font-medium">${offerPrice} <span className="text-base">/night</span></p>
               <p className="text-base font-medium">Including 5% Taxes</p>
            </div>
            <div className="space-y-3 py-5">
               <div className="border-gray-300 border py-2 px-3 rounded-md flex gap-3 items-center">
                  <label htmlFor="check-in" className="font-medium text-lg">Check In:</label>
                  <DatePicker excludeDates={disabledDates} selected={checkInDate} onChange={(date) => setCheckInDate(date)} className="focus:outline-none" />
               </div>
               <div className="border-gray-300 border py-2 px-3 rounded-md flex gap-3 items-center">
                  <label htmlFor="check-out" className="font-medium text-lg">Check Out:</label>
                  <DatePicker excludeDates={disabledDates} selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} className="focus:outline-none" />
               </div>
               {/* additional services */}
               <h3 className="text-xl font-semibold">Additional Services</h3>
                 {
                  // <AdditionalServices total={total} setTotal={setTotal}></AdditionalServices>
                 }
               <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">Total: ${totalPrice}</p>
                  <a className={`capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all cursor-pointer`} onClick={()=> {
                        user ? 
                        document.getElementById('my_modal_3').showModal()
                        : 
                        navigate('/signin')
                     }}>Book a room</a>
                     <dialog id="my_modal_3" className={`modal w-2/6 mx-auto`}>
                        <div className="modal-box">
                           <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                           </form>
                           <div className="space-y-2">
                              <h2 className="text-xl font-medium">{title}</h2>
                              <h3 className="text-lg font-medium">Check In Date: <span className="font-normal">{checkInDate.toString().slice(0, 16)}</span></h3>
                              <h3 className="text-lg font-medium">Check Out Date: <span className="font-normal">{checkInDate.toString().slice(0, 16)}</span></h3>
                              <h3 className="text-lg font-medium">$200<span className="text-base"> including taxes</span></h3>
                              <button onClick={handleNewBooking} className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all mt-2'>Confirm Booking</button>
                           </div>
                        </div>
                     </dialog>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RoomDetails;