// aqui exportaras las funciones que necesites
// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig.js';

// eslint-disable-next-line arrow-body-style
export const createUserWithPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
