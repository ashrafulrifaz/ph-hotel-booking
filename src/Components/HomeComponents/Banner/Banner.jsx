import bannerBg from '../../../assets/banner.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from 'react-parallax';

AOS.init({
   duration: 2000, 
   delay: 250, 
   offset: 100,
})

const Banner = () => {

   return (
      <Parallax strength={250} blur={{ min: -15, max: 15 }} bgImage={bannerBg} className='-z-10'>
         <div className='min-h-screen flex flex-col justify-center text-center'>
            <div data-aos="fade" className="max-w-[90%] xl:max-w-[1200px] mx-auto text-white space-y-5 pt-10">
               <h2 className='font-semibold text-3xl md:text-4xl lg:text-5xl'>Where Comfort Meets Convenience</h2>
               <p className='text-lg lg:text-xl'>Experience travel like never before. With Midnight Mirage Hotel, you can browse, compare, and book<br className='hidden lg:block'/> the best hotel deals, making every journey extraordinary.</p>
               <button className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all'>Explore</button>
            </div>
         </div>
      </Parallax>
   );
};

export default Banner;