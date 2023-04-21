import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC0dP9-zcSGNu3OV_aWix_cVfspJ5QJK98",
  authDomain: "netflix-clone-132cb.firebaseapp.com",
  projectId: "netflix-clone-132cb",
  storageBucket: "netflix-clone-132cb.appspot.com",
  messagingSenderId: "780427612082",
  appId: "1:780427612082:web:10f9e4fdbad2c77294deab",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth,db };
