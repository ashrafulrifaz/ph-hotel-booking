import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import Google from '../../assets/google.png'
import eye from '../../assets/eye.png'
import crossEye from '../../assets/crossed-eye.png'
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import auth from "../../firebase.init";

const SignUp = () => {
   const [showPass, setShowPass] = useState(false)
   const {user, setUser, SignUpUser, googleLogin} = useContext(AuthContext)
   const navigate = useNavigate()
   const [erroMessage, setErroMessage] = useState('')

   const handleLogin = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value
      const password = form.password.value

      if(email === ""){
         setErroMessage('Please! Enter your email')
         return
      }

      if(password === ""){
         setErroMessage('Please! Enter your password')
         return
      }

      SignUpUser(email, password)
         .then(() => {
            navigate('/')
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Sign Up Successful',
            showConfirmButton: false,
            timer: 3000
            })
            updateProfile(auth.currentUser, {
               displayName: name, photoURL: photo
            })
            setUser({...user, photoURL: photo})
         })
         .catch(error => setErroMessage(error.message))
   }

   const handleGoogleLogin = () => {
      const provider = new GoogleAuthProvider()
      googleLogin(provider)
         .then(() => {
            Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Sign Up Successful',
               showConfirmButton: false,
               timer: 3000
            })
            navigate('/')
         })
         .then(error => setErroMessage(error.message))
   }

   return (
      <div className="bg-blue-50">
         <div className="py-8 md:py-10 lg:py-16 max-w-[90%] mx-auto lg:max-w-[85%]">
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto py-5 lg:py-10 px-5 lg:px-16 bg-white rounded-xl">
               <h2 className="text-2xl font-semibold text-center">Create an Account</h2>
               <form onSubmit={handleLogin} className="mt-10 space-y-4">
                  <div>
                     <label className="font-medium" htmlFor="name">Name</label>
                     <input id="name" type="name" name="name" placeholder="Enter your name" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-blue-400 focus:outline-none" />
                  </div>
                  <div>
                     <label className="font-medium" htmlFor="photo">Photo</label>
                     <input id="photo" type="text" name="photo" placeholder="Enter your photoURL" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-blue-400 focus:outline-none" />
                  </div>
                  <div>
                     <label className="font-medium" htmlFor="email">Email</label>
                     <input id="email" type="email" name="email" placeholder="Enter your email" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-blue-400 focus:outline-none" />
                  </div>
                  <div className='relative'>
                     <label className="font-medium" htmlFor="password">Password</label>
                     <input id="password" type={showPass ? 'text' : 'password'} name="password" placeholder="Enter your password" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-blue-400 focus:outline-none" />
                     <span onClick={() => setShowPass(!showPass)} className="absolute text-xs font-semibold bottom-3 right-3 cursor-pointer">
                        {
                           showPass ? 
                           <img src={crossEye} className="w-[18px] h-[18px]" alt="" />
                           :
                           <img src={eye} className="w-[18px] h-[18px]" alt="" /> 
                        }
                     </span>
                  </div>
                  {
                     erroMessage && <p className="text-red-500 font-medium mt-3">{erroMessage}</p>
                  }
                  <button className='capitalize font-medium bg-blue-700 text-white text-[15px] py-2 rounded-lg w-full border border-blue-700 hover:bg-transparent hover:text-blue-700 transition-all'>Sign Up</button>
                  <p className='text-center capitalize'>already have an Account <Link to="/signin" className='font-medium text-blue-700 hover:underline'>Sign In</Link></p>
               </form>
               <div className="flex gap-5 mt-4">
                  <a onClick={handleGoogleLogin} className="capitalize font-semibold border border-blue-700 text-blue-700 hover:bg-blue-700 transition-all hover:text-white items-center py-2 rounded-lg w-full flex justify-center gap-3 cursor-pointer">
                     <img src={Google} className='w-5 h-5' alt="google" /> <span>Continue with Google</span>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;