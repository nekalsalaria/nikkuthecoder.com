import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCdvicFrcPHlSn0vZEQ77HcSiJH2oHKtY",
  authDomain: "nikkuthecoder-a4c23.firebaseapp.com",
  projectId: "nikkuthecoder-a4c23",
  storageBucket: "nikkuthecoder-a4c23.firebasestorage.app",
  messagingSenderId: "1072554019370",
  appId: "1:1072554019370:web:ee271950bc2a948a4c5153",
  measurementId: "G-MZJ7DJPXKR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();