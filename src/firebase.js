import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCw-LzAxU2QTO67pc",
  authDomain: "linkedin-clone-m",
  projectId: "linkedin-clone-cce3d",
  storageBucket: "linkedin-clone-cce3",
  messagingSenderId: "951488896743",
  appId: "1:951496d15600"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};
