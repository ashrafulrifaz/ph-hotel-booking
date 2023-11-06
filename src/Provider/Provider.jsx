import PropTypes from 'prop-types';
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.init";

export const AuthContext = createContext(null)

const Provider = ({children}) => {
   const [rooms, setRooms] = useState([])
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
   
   useEffect(() => {
      axios.get('http://localhost:5000/rooms')
         .then(res => setRooms(res.data))

      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)         
         setLoading(false)
         const userEmail = currentUser?.email || user?.email         
         const loggedUser = {email: userEmail}
         if(currentUser){
            axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
            .then(res => console.log(res.data))
         } else {
            axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
            .then(res => console.log(res.data))
         }
      })
      return () => {
         unsubscribe()
      }
   }, [user])

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const googleLogin = provider => {
      return signInWithPopup(auth, provider)
   }

   const signInUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const signOutUser = () => {
      setLoading(true)
      return signOut(auth)
   }

   const info = {user, createUser, signInUser, signOutUser, googleLogin, loading, rooms}

   return (
      <AuthContext.Provider value={info}>
         {children}
      </AuthContext.Provider>
   );
};

Provider.propTypes = {
   children: PropTypes.object
}

export default Provider;