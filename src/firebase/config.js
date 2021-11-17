import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBRK1XotXdED5rmH5E06SKteO4-SS1YS64',
  authDomain: 'finance-tracker-cbc75.firebaseapp.com',
  projectId: 'finance-tracker-cbc75',
  storageBucket: 'finance-tracker-cbc75.appspot.com',
  messagingSenderId: '188115902746',
  appId: '1:188115902746:web:a19d22da3d26838f070ca3',
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init service

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
