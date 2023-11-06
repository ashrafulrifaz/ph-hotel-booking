import { Link } from "react-router-dom";


const BookedItem = ({booking}) => {
   const {_id, image, title, checkIn, checkOut, price} = booking

   return (
      <li className="border-b border-gray-200 p-5">
         <div className="flex gap-8 items-center">
            <div className="w-1/6">
               <img className="w-48 h-auto rounded-md" src={image} alt="" />
            </div>
            <div className="flex items-center justify-between w-5/6">
               <div>
                  <div>
                     <h3 className="text-2xl font-medium">{title}</h3>
                  </div>
                  <div>
                     <p className="text-xl font-semibold">Check In Date: <span className="font-medium text-lg">{checkIn}</span></p>
                  </div>
                  <div>
                     <p className="text-xl font-semibold">Check In Date: <span className="font-medium text-lg">{checkOut}</span></p>
                  </div>
                  <div>
                     <p className="text-xl font-semibold">Price: <span className="font-medium text-lg">${price}</span></p>
                  </div>
               </div>
               <div className="grid gap-3">
                  <Link to={`/${_id}`}>
                     <button className="border py-1 px-2 rounded-md border-green-500 hover:bg-green-500 hover:text-white transition font-medium">Update</button>
                  </Link>
                  <button className="border py-1 px-2 rounded-md border-red-500 transition hover:text-white hover:bg-red-500 font-medium">Delete</button>
               </div>
            </div>
         </div>
      </li>
   );
};

export default BookedItem;