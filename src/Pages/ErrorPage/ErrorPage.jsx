import { Link } from 'react-router-dom';
import error from '../../assets/404.gif'
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
   return (
      <div className='text-center'>         
         <Helmet>
            <title>Page Not Found</title>
         </Helmet>
         <img src={error} className='md:w-3/4 lg:w-1/2 mx-auto' alt="404" />
         <Link to="/">
            <button className='capitalize font-medium bg-blue-700 text-white py-2 px-5 rounded-md hover:scale-95 transition-all'>Back to home</button>
         </Link>
      </div>
   );
};

export default ErrorPage;