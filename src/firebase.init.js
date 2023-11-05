// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd1kM31vbwXJ32phk3NoVUpXzbam5JZEQ",
  authDomain: "hotel-booking-5f32b.firebaseapp.com",
  projectId: "hotel-booking-5f32b",
  storageBucket: "hotel-booking-5f32b.appspot.com",
  messagingSenderId: "626386535408",
  appId: "1:626386535408:web:a3105b067e4ef004b95335"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth