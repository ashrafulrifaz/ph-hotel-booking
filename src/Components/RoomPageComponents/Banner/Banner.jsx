import bannerImg from '../../../assets/room-banner.jpg'

const Banner = () => {
   const roomBanner = {
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bannerImg}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'top center'
   }
   return (
      <div style={roomBanner} className='h-[75vh] grid items-center justify-center'>
         <h2 data-aos="fade-down" className='text-5xl font-semibold text-white'>Available Rooms</h2>
      </div>
   );
};

export default Banner;