// aqui exportaras las funciones que necesites
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { documentId } from 'firebase/firestore';
import { auth } from '../firebase/firebaseConfig.js';
import { successText } from '../components/register.js';


export const createUserWithPassword = async (email, password) => {
  const createdUser = await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    successText.document.textContent("Tu cuenta ha sido creada con exito.");
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;''
    console.log(errorCode, errorMessage);
  })
};