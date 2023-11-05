import { Link } from 'react-router-dom';
import error from '../../assets/404.gif'

const ErrorPage = () => {
   return (
      <div className='text-center'>
         <img src={error} className='w-1/2 mx-auto' alt="404" />
         <Link to="/">
            <button className='capitalize font-medium bg-blue-700 text-white py-2 px-5 rounded-md hover:scale-95 transition-all'>Back to home</button>
         </Link>
      </div>
   );
};

export default ErrorPage;