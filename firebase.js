require('firebase/firestore');
import firebase from 'firebase';


 var firebaseConfig = {
  apiKey: "AIzaSyCEZ_G_t0LvR5BPSLkZLnRNzExRRgEud6o",
  authDomain: "react-blog-f2eb6.firebaseapp.com",
  databaseURL: "https://react-blog-f2eb6.firebaseio.com",
  projectId: "react-blog-f2eb6",
  storageBucket: "react-blog-f2eb6.appspot.com",
  messagingSenderId: "201969435433",
  appId: "1:201969435433:web:f7294f1faf00f306fa6d38"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
