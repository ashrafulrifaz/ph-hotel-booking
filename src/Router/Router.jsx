import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import Rooms from "../Pages/Rooms/Rooms";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import UpdateBooking from "../Pages/UpdateBooking/UpdateBooking";
import FAQs from "../Pages/FAQ/FAQs";

const Router = createBrowserRouter([
   {
      path: '/',
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>
   },
   {
      path: '/',
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/rooms',
            element: <Rooms></Rooms>
         },
         {
            path: '/rooms/:id',
            element: <RoomDetails></RoomDetails>,
            loader: ({params}) => fetch(`https://hotel-booking-server-side.vercel.app/rooms/${params.id}`)
         },
         {
            path: '/signin',
            element: <SignIn></SignIn>
         },
         {
            path: '/signup',
            element: <SignUp></SignUp>
         },
         {
            path: '/my-bookings',
            element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
         },
         {
            path: '/room/:id',
            element: <UpdateBooking></UpdateBooking>,
            loader: ({params}) => fetch(`https://hotel-booking-server-side.vercel.app/user-bookings/${params.id}`)
         },
         {
            path: '/about',
            element: <About></About>
         },
         {
            path: '/faq',
            element: <FAQs></FAQs>
         }
      ]
   }
])

export default Router;