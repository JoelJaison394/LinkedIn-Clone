import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCwdk4RR44QlodaxvMJE-LzAxU2QTO67pc",
  authDomain: "linkedin-clone-cce3d.firebaseapp.com",
  projectId: "linkedin-clone-cce3d",
  storageBucket: "linkedin-clone-cce3d.appspot.com",
  messagingSenderId: "951488896743",
  appId: "1:951488896743:web:99d156004d509606d20c42"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};