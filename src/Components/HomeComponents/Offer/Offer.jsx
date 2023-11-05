import offerImage from '../../../assets/offer.jpg'
import offImage from '../../../assets/off.png'

const Offer = () => {
   return (
      <div className="py-20 grid grid-cols-2 gap-5 items-center">
         <div>
            <div className='bg-blue-700 w-11/12 rounded-md relative'>
               <img src={offerImage} className='w-full -rotate-6 hover:rotate-0 rounded-md transition-transform' alt="" />
               <img src={offImage} className='absolute -top-12 rotate-45 -right-12 w-32' alt="10%" />
            </div>
         </div>
         <div className="space-y-4">
            <h2 className="text-4xl font-semibold">Hot Deals & Special Promotions</h2>
            <p className="text-lg">Explore our exclusive selection of limited-time hotel offers designed to enhance your stay without breaking the bank. From discounts on room rates to special packages, we{"'"}ve curated these deals to make your visit even more memorable.</p>
            <button className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all'>Explore</button>
         </div>
      </div>
   );
};

export default Offer;