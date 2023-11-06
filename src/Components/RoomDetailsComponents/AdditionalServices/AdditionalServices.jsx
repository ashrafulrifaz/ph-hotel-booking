import PropTypes from 'prop-types';
import { useState } from 'react';
import cab from '../../../assets/cab.png'
import dinner from '../../../assets/dinner.png'
import launch from '../../../assets/launch.png'

const AdditionalServices = ({total, setTotal}) => {
   const [isAdditionalService, setIsAdditionalService] = useState([])

   return (
      <div className="flex flex-wrap gap-3">
         <a className={`flex items-center gap-2 border-2 transition-all p-2 rounded-md cursor-pointer  ${isAdditionalService.includes('Cab') === true ? 'border-green-400 pointer-events-none' : 'border-gray-200 hover:border-gray-400'}`}
         onClick={() => {
            setTotal(total + 10)
            setIsAdditionalService([...isAdditionalService, 'Cab'])
         }}>
            <img src={cab} className="w-6" alt="" />
            <h5 className="font-medium">Cab</h5>
         </a>
         <a className="flex items-center gap-2 border-2 transition-all border-gray-200 p-2 rounded-md cursor-pointer hover:border-gray-400"
         onClick={() => {
            setTotal(total + 10)
            setIsAdditionalService([...isAdditionalService, 'Launch'])
         }}>
            <img src={launch} className="w-6" alt="" />
            <h5 className="font-medium">Launch</h5>
         </a>
         <a className="flex items-center gap-2 border-2 transition-all border-gray-200 p-2 rounded-md cursor-pointer hover:border-gray-400"
         onClick={() => {
            setTotal(total + 10)
            setIsAdditionalService([...isAdditionalService, 'Dinner'])
         }}>
            <img src={dinner} className="w-6" alt="" />
            <h5 className="font-medium">Dinner</h5>
         </a>
      </div>
   );
};

AdditionalServices.propTypes = {
   total: PropTypes.object,
   setTotal: PropTypes.object,
}

export default AdditionalServices;