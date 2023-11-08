import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import barImage from '../../assets/bars.png'
import homeBarImage from '../../assets/bars-white.png'

const Navbar = () => {
   const {user, signOutUser} = useContext(AuthContext)
   const [showButton, setShowButton] = useState(false)

   const handleLogOut = () => {
      signOutUser()
   }

   return (
      <div className="py-4 border-b-2 border-gray-200" id="navbar">
         <div className="max-w-[90%] xl:max-w-[1200px] mx-auto flex justify-between items-center">
            <div>
               <Link to="/">
                  <h2 className="font-semibold text-xl text-blue-700">Midnight Mirage Hotel</h2>
               </Link>
            </div>
            <div>
               <ul className="gap-6 hidden lg:flex" id="nav_item">
                  <li data-aos="zoom-in">
                     <NavLink to="/" className="font-medium hover:text-blue-700">Home</NavLink>
                  </li>
                  <li data-aos="zoom-in">
                     <NavLink to="/rooms" className="font-medium hover:text-blue-700">Rooms</NavLink>
                  </li>
                  <li data-aos="zoom-in">
                     <NavLink to="/about" className="font-medium hover:text-blue-700">About</NavLink>
                  </li>
                  <li data-aos="zoom-in">
                     <NavLink to="/my-bookings" className="font-medium hover:text-blue-700">My Bookings</NavLink>
                  </li>
                  <li data-aos="zoom-in">
                     <NavLink to="/faq" className="font-medium hover:text-blue-700">FAQ</NavLink>
                  </li>
               </ul>
            </div>
            <div>
               <div>                     
                  <div className="drawer drawer-end lg:hidden z-10">
                     <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                     <div className="drawer-content">
                     {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button">
                           {
                              user ?                               
                              <img src={user.photoURL} className="w-9 h-9 rounded-full cursor-pointer" alt="" />
                              :
                              <div>
                                 <img src={homeBarImage} className="w-6 h-6 cursor-pointer hidden" alt="" id="home_bar" />
                                 <img src={barImage} className="w-6 h-6 cursor-pointer" alt="" id="normal_bar" />
                              </div>
                           }
                        </label>
                     </div> 
                     <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="flex flex-col menu w-60 md:w-72 px-8 min-h-full bg-white text-base-content" id="nav_item">
                              <li>
                                 <h2 style={{color: '#1D4ED8'}} className="text-blue-700 px-0 text-xl font-semibold">Midnight Mirage</h2>
                              </li>
                              <li>
                                 <NavLink id="drawer_item" to="/" className="font-medium text-black hover:text-blue-700">Home</NavLink>
                              </li>
                              <li>
                                 <NavLink id="drawer_item" to="/rooms" className="font-medium text-black hover:text-blue-700">Rooms</NavLink>
                              </li>
                              <li>
                                 <NavLink id="drawer_item" to="/about" className="font-medium text-black hover:text-blue-700">About</NavLink>
                              </li>
                              <li>
                                 <NavLink id="drawer_item" to="/my-bookings" className="font-medium text-black hover:text-blue-700">My Bookings</NavLink>
                              </li>
                              <li>
                                 <NavLink id="drawer_item" to="/faq" className="font-medium text-black hover:text-blue-700">FAQ</NavLink>
                              </li>
                              {
                                 user ? <button onClick={handleLogOut} className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all mt-2'>Sign Out</button>
                                 :
                                 <Link to="/signin">
                                    <button className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all mt-2 w-full'>Sign In</button>
                                 </Link>
                              }
                           </ul>
                        </div>
                  </div>
               </div>
               <div className="hidden lg:block">
                  {
                     user ?
                     <span className="cursor-pointer relative hidden lg:block" onClick={() => setShowButton(!showButton)}>
                        <img src={user?.photoURL} className="w-9 h-9 rounded-full" alt="" />
                        <div className={`absolute w-32 right-0 border border-gray-300 rounded-xl shadow-xl py-4 px-3 bg-white ${showButton ? 'block' : 'hidden'}`}>                        
                           <button onClick={handleLogOut} className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all mt-2'>Sign Out</button>
                        </div>
                     </span>                   
                     :
                     <Link to="/signin">
                        <button className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all'>Sign In</button>
                     </Link>
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;