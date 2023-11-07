import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/HomeComponents/Banner/Banner";
import Facilies from "../../Components/HomeComponents/Facilities/Facilies";
import FeaturedRooms from "../../Components/HomeComponents/FeaturedRooms/FeaturedRooms";
import HomeSearch from "../../Components/HomeComponents/HomeSearch/HomeSearch";
import Map from "../../Components/HomeComponents/Map/Map";
import Offer from "../../Components/HomeComponents/Offer/Offer";
import Review from "../../Components/HomeComponents/Review/Review";
import Navbar from "../../Components/Navbar/Navbar";


const Home = () => {

   return (
      <div id="home">
         <Navbar></Navbar>
         <Banner></Banner>
         <div className="max-w-[90%] xl:max-w-[1200px] mx-auto">
            <HomeSearch></HomeSearch>
            <Offer></Offer>
            <FeaturedRooms></FeaturedRooms>
            <Facilies></Facilies>
            <Review></Review>
            <Map></Map>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Home;