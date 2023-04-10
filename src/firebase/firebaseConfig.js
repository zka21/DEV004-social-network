import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

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
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);

// Referenciar collection


/*const logUsers = async () => {
  const refColUsers = db.collection('usuarios');
  const allUsers = await refColUsers.get();
  for(const doc of allUsers.docs){
    console.log('obtiene usuario', doc.id, '=>', doc.data());
  }
}*/
// const refColUser = collection(db, 'usuarios')

// Entra a los documentos de la colección
// const docsOfUsers =  await getDocs(collection(db, "usuarios"))
//   .then((snapshot) => {
//     console.log(docsOfUsers)
//   });



  /*const logCities = async () => {
    let citiesRef = db.collection('cities');
    let allCities = await citiesRef.get();
    for(const doc of allCities.docs){
      console.log(doc.id, '=>', doc.data());
    }
  }*/