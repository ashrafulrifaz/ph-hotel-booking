import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/Provider";
import axios from "axios";
import Swal from "sweetalert2";

const PostReviews = ({bookedUserEmail, room_number}) => {
   const {user} = useContext(AuthContext)
   const time = new Date().toLocaleString().slice(0, 10)

   const handleNewReview = e => {
      e.preventDefault()
      const form = e.target;
      const rating = form.rating.value;
      const review_text = form.review.value;
      const reviewData = {authorName: user?.displayName, authorImage: user?.photoURL, rating, review_text, email: bookedUserEmail, room_number, time}
      
      if(user?.email === bookedUserEmail) {
         axios.post('http://localhost:5000/review', reviewData)
            .then(res => {
               if(res.data.insertedId){
                  Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: "Shared Your Review",
                     showConfirmButton: false,
                     timer: 1500
                  });
                  form.reset()
               }
            })
      }
   }

   return (
      <form onSubmit={handleNewReview}  className="py-8">
         <h3 className="text-xl font-semibold">Share your experience</h3>
         <div className="mt-3">
            <input type="text" name="rating" className="focus:outline-none border border-gray-300 rounded-md w-1/4 px-3 py-1" placeholder="Rating" />
         </div>
         <div className="mt-3">
            <textarea type="text" name="review" rows={5} className="focus:outline-none border border-gray-300 rounded-md w-3/4 px-3 py-2" placeholder="Your experience" />
         </div>
         <button className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 px-5 rounded-md hover:scale-95 transition-all mt-2'>Share</button>
      </form>
   );
};

PostReviews.propTypes = {
   bookedUserEmail: PropTypes.object,
   room_number: PropTypes.object
}

export default PostReviews;