import PropTypes from 'prop-types';
import Rating from 'react-rating';
import quoteImage from '../../../assets/quote-right.png'

const ReviewsCard = ({review}) => {
   const {authorImage, authorName, rating, review_text, time} = review

   return (
      <div className='mt-5'>
         <div className="bg-gray-100 p-5 rounded-lg inline-block min-w-1/2 relative">
            <div className='flex gap-5'>
               <img src={authorImage} className='w-16 h-16 rounded-3xl' alt="image" />
               <div>
                  <h4 className='text-xl font-medium'>{authorName}</h4>
                  <div className="flex items-center gap-2">
                     <Rating
                        emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-yellow-400">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        ></path>
                        </svg>}
                        fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                        <path
                           fillRule="evenodd"
                           d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                           clipRule="evenodd"
                        ></path>
                        </svg>}
                        fractions={2}
                        initialRating={rating}
                        readonly
                     />
                  </div>
                  <p className='font-medium'>{time}</p>
               </div>
            </div>
            <img src={quoteImage} className='w-10 absolute top-5 right-6' alt="" />
            <p className='mt-3'>{review_text}</p>
         </div>
         
      </div>
   );
};

ReviewsCard.propTypes = {
   review: PropTypes.object
}


export default ReviewsCard;
