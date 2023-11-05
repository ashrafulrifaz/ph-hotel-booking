import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext)
   const location = useLocation()
   console.log(location);

   if(loading){
      return <h2>loading...</h2>
   }

   if(user){
      return children
   } else {
      return <Navigate state={location.pathname} to="/signin"></Navigate>
   }
};

export default PrivateRoute;