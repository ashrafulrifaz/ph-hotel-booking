import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

const Map = () => {
   const mapRef = useRef(null)

   useEffect( () => {
      if(!mapRef.current){
         mapRef.current = L.map('hotel-map').setView([24.8949, 91.8687], 12);
         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);
         
         mapRef.current.whenReady(() => {
            const marker = L.marker([24.8949, 91.8687]).addTo(mapRef.current);
            marker.bindPopup('Midnight Mirage Hotel').openPopup();
          });
      }      
   },[])

   return (
      <div className="py-5">
         <div id="hotel-map" className='h-[500px] rounded-md'></div>
      </div>
   );
};

export default Map;