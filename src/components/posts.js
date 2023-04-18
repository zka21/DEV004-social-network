import { addDoc, documentId, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { signOutUser, coleccPublic, qOrdered } from '../lib/firebaseFunctions';
import { auth, db } from '../firebase/firebaseConfig';

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
            <img src="../Imagenes/cáo_navbarwhite.png">
            <button class="buttonsOfPosts logOutButton" id="logOutBoton"></button>
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
      <div id="historyOfPosts" class="historyOfPosts">
        <div class="informationOfUser" id="${doc.id}">
              <div class="user-post">
                <img src="./Imagenes/usersinfondo.png" class="inLine">
                <div class="post-informacion">
                  <h3>${doc.data().autor}</h3>
                  <h5>${doc.data().creacion}</h5>
                </div>
              </div>
            <p class="mostrado" id="p-${doc.id}">${doc.data().descripcion}</p>
            <textarea class="oculto" id="textarea-${doc.id}">${doc.data().descripcion}</textarea>
            <div class="editright likeleft">
                <button class="like-button"></button>
              </div>
        </div>
         ${
  (doc.data().autor === userData().email)
    ? `
            <div id="buttonsOfConfiguration">
              <div class="likeleft">
                <button class="edit-button" data-id="${doc.id}"></button>
                <button class="delete-button" data-id="${doc.id}"></button>
              </div>
              
            </div>
            `
    : ''
}
      </div>
      `;
    });
    const editButton = post.querySelectorAll('.edit-button');
    console.log(editButton);
    editButton.forEach((boton) => {
      boton.addEventListener('click', (e) => {
        document.getElementById(e.target.dataset.id)
          .innerHTML += `
       <button id="g-${e.target.dataset.id}">Guardar</button>
       `;
        document.getElementById(`p-${e.target.dataset.id}`)
          .setAttribute('class', 'oculto');
        const textAIn = document.getElementById(`textarea-${e.target.dataset.id}`);
        //document.getElementById(`textarea-${e.target.dataset.id}`)
        textAIn.setAttribute('class', 'mostrado');
        console.log(e.target.dataset.id);
        document.getElementById(`g-${e.target.dataset.id}`)
          .addEventListener('click', () => {
            console.log('click guardar');
            const docRef = doc(db, 'publicaciones', e.target.dataset.id);
            updateDoc(docRef, {
              descripcion: textAIn.value,
            });
          });
      });
    });
    const deleteButton = post.querySelectorAll('.delete-button');
    
    deleteButton.forEach((boton) => {
      boton.addEventListener('click', (e) => {
        console.log("funciona el boton de eliminar", deleteButton);
        document.getElementById(e.target.dataset.id)
        const docRef = doc(db, 'publicaciones', e.target.dataset.id);
        deleteDoc(docRef);

        
      })
    })
  });

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
