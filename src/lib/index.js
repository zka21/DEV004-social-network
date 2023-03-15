// aqui exportaras las funciones que necesites
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig.js';

// eslint-disable-next-line arrow-body-style
export const createUserWithPassword = async (email, password) => {
  const createdUser = await createUserWithEmailAndPassword(auth, email, password);
  return createdUser;
};
