
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6PMmDNHeDsHid0fAFGtXTk0o2UKfPnrg",
  authDomain: "artistica-trasluz.firebaseapp.com",
  projectId: "artistica-trasluz",
  storageBucket: "artistica-trasluz.appspot.com",
  messagingSenderId: "1076911881415",
  appId: "1:1076911881415:web:e3e5014624633f3ef492e2",
  measurementId: "G-R0YDSR918Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);