import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const Navbar = () => {
   const {user, signOutUser} = useContext(AuthContext)
   const [showButton, setShowButton] = useState(false)
   console.log(user);

   const handleLogOut = () => {
      signOutUser()
   }

   return (
      <div className="py-4 border-b-2 border-gray-200" id="navbar">
         <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            <div>
               <Link to="/">
                  <h2 className="font-semibold text-xl text-blue-700">Midnight Mirage Hotel</h2>
               </Link>
            </div>
            <div>
               <ul className="flex gap-6" id="nav_item">
                  <li>
                     <NavLink to="/" className="font-medium hover:text-blue-700">Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/rooms" className="font-medium hover:text-blue-700">Rooms</NavLink>
                  </li>
                  <li>
                     <NavLink to="/about" className="font-medium hover:text-blue-700">About</NavLink>
                  </li>
                  <li>
                     <NavLink to="/my-bookings" className="font-medium hover:text-blue-700">My Bookings</NavLink>
                  </li>
                  <li>
                     <NavLink to="/faq" className="font-medium hover:text-blue-700">FAQ</NavLink>
                  </li>
               </ul>
            </div>
            <div>
               {
                  user ?
                  <span className="cursor-pointer relative" onClick={() => setShowButton(!showButton)}>
                     <img src={user?.photoURL} className="w-9 h-9 rounded-full" alt="" />
                     <div className={`absolute w-32 right-0 border border-gray-300 rounded-xl shadow-xl py-4 px-3 bg-white ${showButton ? 'block' : 'hidden'}`}>
                        <button onClick={handleLogOut} className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all'>Log Out</button>
                     </div>
                  </span> 
                  :
                  <Link to="/signin">
                     <button className='mt-3 capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all'>Login</button>
                  </Link>
               }
            </div>
         </div>
      </div>
   );
};

export default Navbar;