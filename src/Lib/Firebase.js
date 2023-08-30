import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHSWvIX6a5dRah9aZDilz2sMOpKZ-ITns",
  authDomain: "notebook-d534d.firebaseapp.com",
  projectId: "notebook-d534d",
  storageBucket: "notebook-d534d.appspot.com",
  messagingSenderId: "845104675067",
  appId: "1:845104675067:web:714ac76f9d490070b0585e"
};


if( !firebase.apps.length ){
    firebase.initializeApp( firebaseConfig );
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();