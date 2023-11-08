import { Helmet } from "react-helmet-async";
import faqImage from '../../assets/faq.jpg'

const FAQs = () => {
   return (
      <div className="max-w-[90%] lg:max-w-[1200px] mx-auto py-10 lg:py-4">
         <Helmet>
            <title>FAQ - Midnight Mirage Hotel</title>
         </Helmet>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className="hidden lg:block">
               <img data-aos="zoom-in" src={faqImage} alt="" />
            </div>
            <div>
               <h2 className="capitalize text-2xl font-semibold">Some Question about our hotel</h2>
               <div className="space-y-3 mt-4">
                  <div data-aos="fade-in" className="collapse collapse-plus border border-gray-300">
                     <input type="checkbox" className="peer" /> 
                     <div className="collapse-title peer-checked:bg-gray-200 text-xl font-medium">
                        What is your check-in and check-out time?
                     </div>
                     <div className="collapse-content peer-checked:bg-gray-200"> 
                        <p className="text-lg font-medium">Out check-in and checkout time is 10AM</p>
                     </div>
                  </div>
                  <div data-aos="fade-in" className="collapse collapse-plus border border-gray-300">
                     <input type="checkbox" className="peer" /> 
                     <div className="collapse-title peer-checked:bg-gray-200 text-xl font-medium">
                        Are pets allowed in the hotel?
                     </div>
                     <div className="collapse-content peer-checked:bg-gray-200"> 
                        <p className="text-lg font-medium">No. We are not allow pets in our hotel. Because it can harmful or disturbance for others.</p>
                     </div>
                  </div>
                  <div data-aos="fade-in" className="collapse collapse-plus border border-gray-300">
                     <input type="checkbox" className="peer" /> 
                     <div className="collapse-title peer-checked:bg-gray-200 text-xl font-medium">
                        What is your cancellation policy?
                     </div>
                     <div className="collapse-content peer-checked:bg-gray-200"> 
                        <p className="text-lg font-medium">You can cancel your booking before 1 day of check-in time.</p>
                     </div>
                  </div>
                  <div data-aos="fade-in" className="collapse collapse-plus border border-gray-300">
                     <input type="checkbox" className="peer" /> 
                     <div className="collapse-title peer-checked:bg-gray-200 text-xl font-medium">
                        Is breakfast included with the room?
                     </div>
                     <div className="collapse-content peer-checked:bg-gray-200"> 
                        <p className="text-lg font-medium">Yes. You will get breakfast for free.</p>
                     </div>
                  </div>
                  <div data-aos="fade-in" className="collapse collapse-plus border border-gray-300">
                     <input type="checkbox" className="peer" /> 
                     <div className="collapse-title peer-checked:bg-gray-200 text-xl font-medium">
                        Do you have meeting or event facilities available?
                     </div>
                     <div className="collapse-content peer-checked:bg-gray-200"> 
                        <p className="text-lg font-medium">Yes. We have a specific room for meeting or events.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
   );
};

export default FAQs;