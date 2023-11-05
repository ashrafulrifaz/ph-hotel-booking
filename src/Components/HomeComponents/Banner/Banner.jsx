import bannerBg from '../../../assets/banner.jpg'

const Banner = () => {
   const bannerBackground = {
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bannerBg}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
   }

   return (
      <div style={bannerBackground} className='min-h-screen flex flex-col justify-center text-center -z-10'>
         <div className="max-w-[1200px] mx-auto text-white space-y-5">
            <h2 className='font-semibold text-5xl'>Where Comfort Meets Convenience</h2>
            <p className='text-xl'>Experience travel like never before. With Midnight Mirage Hotel, you can browse, compare, and book<br/> the best hotel deals, making every journey extraordinary.</p>
            <button className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all'>Explore</button>
         </div>
      </div>
   );
};

export default Banner;