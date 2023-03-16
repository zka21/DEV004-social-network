// aqui exportaras las funciones que necesites
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { documentId } from 'firebase/firestore';
import { auth } from '../firebase/firebaseConfig.js';
import { successText } from '../components/register.js';


export const createUserWithPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     alert("Tu cuenta ha sido creada con exito.");
// })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     if(errorCode==="auth/invalid-email"){
//       alert("correo invalido")

//     }
//     else if (errorCode==="auth/email-already-in-use"){
//       alert("este correo esta registrado")
//     }
//     else if (errorCode==="auth/weak-password"){
//       alert("tu contraseña es debil")
//     }
//     else if (errorCode){
//       alert("algo salio mal, vuelve")
//     }
//   })
};