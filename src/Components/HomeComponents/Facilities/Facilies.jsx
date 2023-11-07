import gymImage from '../../../assets/weights.png'
import spaImage from '../../../assets/spa.png'
import poolImage from '../../../assets/swimming-pool.png'
import cabImage from '../../../assets/cab.png'
import resturantImage from '../../../assets/launch.png'
import barImage from '../../../assets/cocktail.png'
import rentImage from '../../../assets/deal.png'
import bookImage from '../../../assets/book.png'

const Facilies = () => {
   return (
      <div className="py-10">
         <h2 className="text-2xl md:text-3xl font-semibold text-center">Our Facilities</h2>
         <div className="mt-10 flex justify-center flex-wrap gap-12">
            <div className='text-center'>
               <img src={gymImage} className='w-16 md:w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>Fitness Center</p>
            </div>
            <div className='text-center'>
               <img src={spaImage} className='w-16 md:w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>Spa & Wellness Center</p>
            </div>
            <div className='text-center'>
               <img src={poolImage} className='w-16 md:w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>Swimming Pool</p>
            </div>
            <div className='text-center'>
               <img src={cabImage} className='w-16 md:w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>Hotel Cab</p>
            </div>
            <div className='text-center'>
               <img src={resturantImage} className='w-16 md:w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>Resturant</p>
            </div>
            <div className='text-center'>
               <img src={barImage} className='w-16 md:w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>Bar and Lounge</p>
            </div>
            <div className='text-center'>
               <img src={rentImage} className='w-16 md:w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>Car Rental Services</p>
            </div>
            <div className='text-center'>
               <img src={bookImage} className='w-16 md:w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>Reading Lounge</p>
            </div>
         </div>
      </div>
   );
};

export default Facilies;