import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA48SYUt771pMRNTa4rULjm7glCSKabEbc",
    authDomain: "hand-drawn-wear.firebaseapp.com",
    projectId: "hand-drawn-wear",
    storageBucket: "hand-drawn-wear.appspot.com",
    messagingSenderId: "45927993869",
    appId: "1:45927993869:web:fe154bcc954e76c82c3b44",
    measurementId: "G-2WQ9VGZ28R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };