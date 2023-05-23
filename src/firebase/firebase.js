import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCRlytnqx8xYOBXlabbH2aNo2qpaeeExas",
  authDomain: "sunischitappdemo.firebaseapp.com",
  databaseURL: "https://sunischitappdemo-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sunischitappdemo",
  storageBucket: "sunischitappdemo.appspot.com",
  messagingSenderId: "250857658535",
  appId: "1:250857658535:web:57d37109a36597dd56e382",
  measurementId: "G-CRJKF2TRKC"
};
  
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  export  { db, firebase };
  export {auth}


  