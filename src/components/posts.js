import { addDoc, documentId, onSnapshot } from 'firebase/firestore';
import { signOutUser, coleccPublic, qOrdered } from '../lib/firebaseFunctions';
import { auth } from '../firebase/firebaseConfig';

const userData = () => {
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  }
  return user;
};

export const posts = () => {
  const root = document.getElementById('root');
  root.innerHTML = `
    <section id= "containerMain">

        <div id="partOfwelcome">

            <img src="../Imagenes/cactusFile.png"><br>
            
            <p>Cuentanos algo de las plantas</p>

        </div>

        <form id="newPost">

            <div class="postContainer">
            <textarea id="description" rows="6" cols="50" placeholder="cuentanos algo de las plantas"> </textarea> <br>
            </div>
            <button  >Publicar</button>

        </form>

        

        

       
        
        
    </section>

    <footer></footer>
    `;

  onSnapshot(qOrdered, (querySnapshot) => {
    const post = document.getElementById('post');
    post.innerHTML = '';
    querySnapshot.forEach((doc) => {
      post.innerHTML += `
      <div id="historyOfPosts">

        <div id="informationOfUser">
            <img src="./Imagenes/usersinfondo.png">
            <h3>${doc.data().autor}</h3><br>
            <h5>${doc.data().creacion}</h5>
            <p>${doc.data().descripcion}</p>
        </div>
        
        <div id="buttonsOfConfiguration">
            <button class="buttonsOfConfiguration">Edit</button>
            <button class="buttonsOfConfiguration">Delete</button>
            <button >Me gusta</button>
        </div>

      </div>
`;
    });
  });
const logOutSection=document.getElementById('logout');
logOutSection.innerHTML='';
  logOutSection.innerHTML= `<button class="buttonsOfPosts" id="logOutBoton">Log Out</button>`

  const logOut = document.getElementById('logOutBoton');
  logOut.addEventListener('click', () => signOutUser());
  const today = new Date();

  const publishButton = root.querySelector('#newPost');
  publishButton.addEventListener('submit', (e) => {
    e.preventDefault();

    const infoUser = userData();
    addDoc(coleccPublic, {
      autor: infoUser.email,
      descripcion: publishButton.description.value,
      creacion: today.toLocaleString('en-GB'),
    })
      .then(() => {
        publishButton.reset();
      });
  });
  return root;
};
