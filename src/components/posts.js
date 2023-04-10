import { signOutUser, listarPosts, coleccPublic } from '../lib/firebaseFunctions';
import { addDoc } from 'firebase/firestore';

// para cuando se caegue el dom, y aqui dentro traeremos datos de firestore
// window.addEventListener('DOMContentLoaded', () => {
//   console.log('cargando para traer datos');
// });

export const posts = () => {
  const root = document.getElementById('root');
  root.innerHTML = `
    <section id= "containerMain">

        <div id="partOfwelcome">

            <img src="../Imagenes/cactusFile.png"><br>
            <h2>Bienvenido a Cáo</h2>
            <p>Cuentanos algo de las plantas</p>

        </div>

        <form id = "newPost">

            <div class="postContainer">

            <textarea id="description" rows="6" cols="50" placeholder="cuentanos algo de las plantas"> </textarea> <br>
            </div>
            <button id="publishButton" class="buttonsOfPosts">Publicar</button>

        </form>

        <line>____________________________________</line> <br><br>

        <div id="historyOfPosts">

            <div id="informationOfUser">
                <img src="./Imagenes/usersinfondo.png">
                <h3>Name User</h3>
            </div>
            
            <div id="buttonsOfConfiguration">
                <button class="buttonsOfConfiguration">Edit</button>
                <button class="buttonsOfConfiguration">Delete</button>
            </div>

        </div>

        <button class="buttonsOfPosts">Me gusta</button>
        <button class="buttonsOfPosts" id="logOut">Login Out</button>
        
    </section>

    <footer></footer>
    `;
  const logOut = document.getElementById('logOut');
  logOut.addEventListener('click', () => signOutUser());


  const publishButton = document.querySelector('#newPost');
  publishButton.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('hola estoy intentando enviar algo');
    const guardarPost = addDoc(coleccPublic, {
      //autor: ,
      descripcion: publishButton.description.value,
    })
      .then(() => {
        publishButton.reset();
      });
  });
  return root;
};
