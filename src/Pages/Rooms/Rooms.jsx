// import Banner from "../../Components/RoomPageComponents/Banner/Banner";
import { Helmet } from "react-helmet-async";
import RoomSection from "../../Components/RoomPageComponents/RoomSection/RoomSection";

const Rooms = () => {
   return (
      <div>
         <Helmet>
            <title>Rooms - Midnight Mirage Hotel</title>
         </Helmet>
         {/* <Banner></Banner> */}
         <RoomSection></RoomSection>
      </div>
   );
};

export default Rooms;