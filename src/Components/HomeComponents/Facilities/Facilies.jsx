import gymImage from '../../../assets/weights.png'
import spaImage from '../../../assets/spa.png'
import poolImage from '../../../assets/swimming-pool.png'
import cabImage from '../../../assets/cab.png'
import resturantImage from '../../../assets/launch.png'

const Facilies = () => {
   return (
      <div className="py-10">
         <h2 className="text-3xl font-semibold text-center">Our Facilities</h2>
         <div className="mt-10 flex justify-center flex-wrap gap-24">
            <div className='text-center'>
               <img src={gymImage} className='w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>GYM</p>
            </div>
            <div className='text-center'>
               <img src={spaImage} className='w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>Spa</p>
            </div>
            <div className='text-center'>
               <img src={poolImage} className='w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>Swimming Pool</p>
            </div>
            <div className='text-center'>
               <img src={cabImage} className='w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>Hotel Cab</p>
            </div>
            <div className='text-center'>
               <img src={resturantImage} className='w-20 mx-auto' alt="image" />
               <p className='mt-2 font-medium text-lg'>Resturant</p>
            </div>
         </div>
      </div>
   );
};

export default Facilies;