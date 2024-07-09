import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA4U5H8Yptpt1R1AXzI-4IWOEoKoasXRZs',
  authDomain: 'e-watch-pro.firebaseapp.com',
  projectId: 'e-watch-pro',
  storageBucket: 'e-watch-pro.appspot.com',
  messagingSenderId: '358777181686',
  appId: '1:358777181686:web:760dd376983c90b9dae3d7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
