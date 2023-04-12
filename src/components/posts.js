import { addDoc, onSnapshot } from 'firebase/firestore';
import { signOutUser, coleccPublic, q } from '../lib/firebaseFunctions';
import { auth } from '../firebase/firebaseConfig';

const userData = () => {
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
  return user;
};

export const posts = () => {
  const root = document.getElementById('root');
  root.innerHTML = `
    <section id= "containerMain">

        <div id="partOfwelcome">

            <img src="../Imagenes/cactusFile.png"><br>
            <h2>Bienvenido a Cáo</h2>
            <p>Cuentanos algo de las plantas</p>

        </div>

        <form id="newPost">

            <div class="postContainer">
            <textarea id="description" rows="6" cols="50" placeholder="cuentanos algo de las plantas"> </textarea> <br>
            </div>
            <button id="publishButton" class="buttonsOfPosts" >Publicar</button>

        </form>

        <line>____________________________________</line> <br><br>

        <div id="historyOfPosts">

            <div id="informationOfUser">
                <img src="./Imagenes/usersinfondo.png">
                <h3>Name User</h3><br>
                <h5>Time</h5>
                <p></p>
            </div>
            
            <div id="buttonsOfConfiguration">
                <button class="buttonsOfConfiguration">Edit</button>
                <button class="buttonsOfConfiguration">Delete</button>
            </div>

        </div>

        <button class="buttonsOfPosts">Me gusta</button>
        <button class="buttonsOfPosts" id="logOut">Log Out</button>
        
    </section>

    <footer></footer>
    `;

  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());

      root.innerHTML += `<div id="historyOfPosts">

  <div id="informationOfUser">
      <img src="./Imagenes/usersinfondo.png">
      <h3>${doc.data().autor}</h3><br>
      <h5>${doc.data().creacion}</h5>
      <p>${doc.data().descripcion}</p>
  </div>
  
  <div id="buttonsOfConfiguration">
      <button class="buttonsOfConfiguration">Edit</button>
      <button class="buttonsOfConfiguration">Delete</button>
  </div>

</div>`;
    });
  });
  const logOut = document.getElementById('logOut');
  logOut.addEventListener('click', () => signOutUser());
  const today = new Date();

  const publishButton = root.querySelector('#newPost');
  publishButton.addEventListener('submit', (e) => {
    e.preventDefault();

    const infoUser = userData();
    // console.log('hola estoy intentando enviar algo');
    const guardarPost = addDoc(coleccPublic, {
      autor: infoUser.email,
      descripcion: publishButton.description.value,
      creacion: today.toLocaleDateString('en-US'),
    })
      .then(() => {
        publishButton.reset();
      });
  });
  return root;
};

// const historialDePublicaciones = (p) => {
//   autor.innerHTML = p.autor;
//   time.innerHTML = p.creacion;
//   descriptionOfPublication = p.descripcion;
// };
// publicaciones.forEach((p) => {
//   historialDePublicaciones(p);
// });

// console.log(listarPosts());
