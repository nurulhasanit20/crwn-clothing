import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAIeWnE_glwnC7SokCMRMmI2uBSYqwt6U0",
  authDomain: "crwn-clothing-5e36a.firebaseapp.com",
  databaseURL: "https://crwn-clothing-5e36a.firebaseio.com",
  projectId: "crwn-clothing-5e36a",
  storageBucket: "crwn-clothing-5e36a.appspot.com",
  messagingSenderId: "334679951239",
  appId: "1:334679951239:web:b1b8641fdb52a854437522",
  measurementId: "G-WB1GQFDMN0"
  
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{ 
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;