import { loginGoogle } from '../lib/firebaseFunctions.js';
import { onNavigate } from '../router/index.js';

export const welcome = () => {
  const root = document.getElementById('root');
  // root.style.backgroundColor = '#E9ECE3';
  // se envuelven los botones en un contenedor con la clase "button-container"
  root.innerHTML = `
  <div class="button-container">
    <div class="logo-container">
      <img class="imageLogo" src="./Imagenes/logoSolo.png" alt="logocactus"> <br>
      <span class="logoText">Cáo</span><br>
    </div>
    <button id="buttonLogin"> INICIAR SESIÓN  </button> <br>
    <button id="buttonGoogle" class="googleButton"> INICIAR SESIÓN CON GOOGLE </button> <br>
    <button id="buttonRegister" > CREA CUENTA NUEVA</button>
  </div>`;
  const buttonLogin = document.getElementById('buttonLogin');
  const buttonGoogle = document.getElementById('buttonGoogle');
  const buttonRegister = document.getElementById('buttonRegister');
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonGoogle.addEventListener('click', () => {
    // new GoogleAuthProvider(auth, provider);
    loginGoogle().then((resp) => {
      // onNavigate('/posts');
      console.log('Ok');
    }).catch((error) => {
      // alert('Verifica)
      console.log('error');
    });
  });
};
