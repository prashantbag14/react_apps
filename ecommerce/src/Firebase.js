import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/firestore'
import 'firebase/compat/storage'



const firebaseConfig = {
    apiKey: "AIzaSyBMMP0kXIk-EswUx6At47weTfJaasfAwMc",
    authDomain: "ecommerce-app-4c628.firebaseapp.com",
    projectId: "ecommerce-app-4c628",
    storageBucket: "ecommerce-app-4c628.appspot.com",
    messagingSenderId: "382328256867",
    appId: "1:382328256867:web:6117ac39b986c1c8bafb56",
    measurementId: "G-NY55XRL9NB"
  };



firebase.initializeApp(firebaseConfig);

export default firebase;