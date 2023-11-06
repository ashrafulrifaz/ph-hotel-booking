

const About = () => {
   const bookedDates = ['10-11-2023', '15-11-2023', '20-11-2023'];

   // Loop through bookedDates and create Date objects
   const disabledDates = bookedDates.map(dateString => new Date(dateString));

   // Add more dates to this array as needed
   const additionalDisabledDates = [
   ];

   console.log(additionalDisabledDates);

   return (
     <div className="max-w-[1200px] mx-auto py-10">
         <h1>hello</h1>
     </div>
   );
};

export default About;