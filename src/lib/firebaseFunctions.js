// aqui exportaras las funciones que necesites
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {
  collection, query, orderBy, addDoc,
} from 'firebase/firestore';
import { auth, provider, db } from '../firebase/firebaseConfig.js';

export const coleccPublic = collection(db, 'publicaciones');

export const creatPost = (data) => {
  return addDoc(coleccPublic, data);
};

export const createUserWithPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)}

export const loginGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    // console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // console.log('error desde FB', error);
  });

export function authStateChangedEvent(cb) {
  onAuthStateChanged(auth, (user) => cb(user));
}

export const signOutUser = () => {
  signOut(auth);
  const postSection = document.getElementById('post');
  postSection.innerHTML = '';
};

// Colección publicaciones


export const qOrdered = query(coleccPublic, orderBy('creacion', 'desc'));
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
};
