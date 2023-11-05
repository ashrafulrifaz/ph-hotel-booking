
const HomeSearch = () => {
   return (
      <div className="py-8 px-12 rounded-xl w-3/4 mx-auto -mt-10 z-10 bg-white shadow-xl">
         <form className="flex justify-between">
            <div>
               <input className="" type="date" name="date" placeholder="Iheck In" />
            </div>
            <div>
               <input type="date" name="date" />
            </div>
            <div>
               <input type="date" name="date" />
            </div>
         </form>
      </div>
   );
};

export default HomeSearch;