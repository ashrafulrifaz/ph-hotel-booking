import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = () => {
   const [checkInDate, setCheckInDate] = useState(new Date());
   // const [checkOutDate, setCheckOutDate] = useState(new Date());   
   const disabledDate = new Date('2023-11-20');

   return (
      <div>
         <div className="flex gap-2">
            <div className="border-gray-300 border py-2 px-3 rounded-md">
               <label htmlFor="check-in" className="font-medium text-lg">Check In:</label>
               <DatePicker excludeDates={[disabledDate]} selected={checkInDate} onChange={(date) => setCheckInDate(date)} />
            </div>
            <div className="border-gray-300 border py-2 px-3 rounded-md">
               <label htmlFor="check-out" className="font-medium text-lg">Check Out:</label>
            </div>
         </div>
      </div>
   );
};

export default DatePicker;