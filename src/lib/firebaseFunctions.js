// aqui exportaras las funciones que necesites
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
import { documentId } from 'firebase/firestore';
import { auth, provider } from '../firebase/firebaseConfig.js';

export const createUserWithPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const loginGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("error desde FB", error);
  });
