// aqui exportaras las funciones que necesites
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { documentId } from 'firebase/firestore';
import { auth } from '../firebase/firebaseConfig.js';
import { successText } from '../components/register.js';


export const createUserWithPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)

};
export const signInWithEmail = (email, password) => {
return signInWithEmailAndPassword (auth, email, password)

}