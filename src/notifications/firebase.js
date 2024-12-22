// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging ,getToken} from "firebase/messaging";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC9I_D4prMbSzrA9u13e-6SgmgTiWdOGXE",
  authDomain: "taskmanagerpwa.firebaseapp.com",
  projectId: "taskmanagerpwa",
  storageBucket: "taskmanagerpwa.firebasestorage.app",
  messagingSenderId: "158316325239",
  appId: "1:158316325239:web:53fbaf54182a97c3b01972",
  measurementId: "G-Y5R7FTQXDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
//const analytics = getAnalytics(app);

export const generateToken= async()=>{
    const permission=await Notification.requestPermission();
    console.log(permission);
    if(permission==="granted"){
        const token=await getToken(messaging,{
            vapidKey:"BMS4I6aNteMutCtUJWs4QuyhKzeoL7Xf5pY7XVyJWgCybjJv82R9V9xmaU5q4xfcFitk9CJh4Ih01ua2eznGmEU"
        })
        console.log(token);
    }
   
}