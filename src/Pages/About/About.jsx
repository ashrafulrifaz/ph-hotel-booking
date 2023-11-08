import { Helmet } from "react-helmet-async";
import aboutImage from '../../assets/about.jpg'
import { Link } from "react-router-dom";
import Facilies from "../../Components/HomeComponents/Facilities/Facilies";


const About = () => {
   

   return (
     <div className="max-w-[90%] xl:max-w-[1200px] mx-auto pt-16 pb-0">
        <Helmet>
            <title>About - Midnight Mirage Hotel</title>
        </Helmet>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div data-aos="zoom-in-right" className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-semibold">Our Vision and Values</h2>
              <p className="text-lg">Step into a world of excellence where our vision and values guide us in delivering unparalleled services. We believe in upholding the highest standards of quality, sustainability, and guest satisfaction. Learn more about our core values and how they shape the way we serve you.</p>
              <Link to={'/rooms'}>
                <button className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all mt-3'>Explore Rooms</button>
              </Link>
          </div>
          <div data-aos="zoom-in-left">
              <div className='bg-blue-700 w-full lg:w-11/12 rounded-md relative'>
                <img src={aboutImage} className='w-full -rotate-6 hover:rotate-0 rounded-md transition-transform' alt="" />
              </div>
          </div>
        </div>
        <div className="py-16">
          <Facilies></Facilies>
        </div>
     </div>
   );
};

export default About;