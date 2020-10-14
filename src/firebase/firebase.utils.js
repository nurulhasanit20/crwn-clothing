import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDCQ7jFLZ3t9RCQjB6zjor4Es4I6almnhM",
    authDomain: "crwn-db-33207.firebaseapp.com",
    databaseURL: "https://crwn-db-33207.firebaseio.com",
    projectId: "crwn-db-33207",
    storageBucket: "crwn-db-33207.appspot.com",
    messagingSenderId: "792928089746",
    appId: "1:792928089746:web:ebacd6e4a9248d8bc7184b",
    measurementId: "G-WX4GVG2J1E"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;