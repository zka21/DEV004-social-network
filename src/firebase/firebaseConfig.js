import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCy_9bQkohmcHxx-FJ-sF2Nav1oRPnRUkY',
  authDomain: 'cao-app-labo.firebaseapp.com',
  databaseURL: 'https://cao-app-labo-default-rtdb.firebaseio.com',
  projectId: 'cao-app-labo',
  storageBucket: 'cao-app-labo.appspot.com',
  messagingSenderId: '513259901946',
  appId: '1:513259901946:web:7f4f930a3f5c3c6ab70a43',
  measurementId: 'G-H7KG3JSLE7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
