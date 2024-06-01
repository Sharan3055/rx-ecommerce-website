// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3BsppmcewHDNBTFQr5MbO4Dy8jyeL3zU",
  authDomain: "reactsignin-82033.firebaseapp.com",
  projectId: "reactsignin-82033",
  storageBucket: "reactsignin-82033.appspot.com",
  messagingSenderId: "510176254451",
  appId: "1:510176254451:web:eef04b5cc3d2da9b40da86",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
