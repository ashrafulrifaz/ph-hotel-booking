import { NavLink } from "react-router-dom";
import bkash from '../../assets/bkash.png'
import nogod from '../../assets/nogod.png'
import dbbl from '../../assets/dbbl.png'
import visa from '../../assets/visa.png'
import mastercard from '../../assets/mastercard.png'
import upay from '../../assets/upay.png'

const Footer = () => {
   return (
      <div className="py-10 border-t-2 border-gray-200">
         <div className="max-w-[90%] xl:max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-between">
            <div className="space-y-3">
               <h2 className="font-semibold text-xl text-blue-700">Midnight Mirage Hotel</h2>
               <p className="text-lg">Your gateway to unforgettable stays is right here. Find, reserve, and enjoy the best hotels worldwide with us.</p>
            </div>
            <div>
               <h3 className="text-xl font-semibold">Payment Methods</h3>
               <div className="grid grid-cols-5 gap-2 mt-4">
                  <img src={bkash} className="w-full " alt="" />
                  <img src={nogod} className="w-full " alt="" />
                  <img src={dbbl} className="w-full " alt="" />
                  <img src={visa} className="w-full " alt="" />
                  <img src={mastercard} className="w-full " alt="" />
                  <img src={upay} alt="" />
               </div>
            </div>
            <div className="space-y-3">
               <h3 className="text-xl font-semibold">Contact Info</h3>
               <div className="space-y-1">
                  <h4 className="text-lg">midnightmiragehotel@gmail.com</h4>
                  <h4 className="text-lg">+88 09678 332211</h4>
               </div>
            </div>
            <div>
               <h3 className="text-xl font-semibold">Discover</h3>
               <ul className="mt-4 flex flex-col gap-3" id="nav_item">
                  <li>
                     <NavLink to="/rooms" className="font-medium hover:text-blue-700">Rooms</NavLink>
                  </li>
                  <li>
                     <NavLink to="/about" className="font-medium hover:text-blue-700">About</NavLink>
                  </li>
                  <li>
                     <NavLink to="/faq" className="font-medium hover:text-blue-700">FAQ</NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Footer;