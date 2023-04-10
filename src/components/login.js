import { signInWithEmail } from '../lib/firebaseFunctions.js';
import { onNavigate } from '../router/index.js';

export const login = () => {
  const root = document.getElementById('root');
  root.innerHTML = `
  <section id="sectionOfLogin">
  <div id="logoContainer">
  <img class="imageLogo" src="./Imagenes/logoSolo.png" alt="imagenLogo">
  </div>
  <form id="loginForm">
  <div id="loginDiv">
    <p id="statusText"></p><br>
    <h2 class="login-title">Iniciar Sesión</h2><br>
    <div id = "userDiv">
      <input id="inputUser" type="email" placeholder= "Correo Electrónico"></input> <br>
      <input id="inputPassword" type="password" placeholder= "Contraseña"></input>
    </div>
    <div id="buttons">
    <button id="buttonLogin" type="submit">SIGUIENTE</button> <br>
    <button id="returnToWelcome">REGRESAR AL INICIO</button>
    </div>
    </div>
  </form>
  </section>
  `;
  const returnToWelcome = document.getElementById('returnToWelcome');
  returnToWelcome.addEventListener('click', () => onNavigate('/'));
  const loginEmail = document.getElementById('inputUser');
  const loginPassword = document.getElementById('inputPassword');
  const buttonLogin = document.getElementById('buttonLogin');

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const statusDiv = document.getElementById('statusText');
    const password = loginPassword.value;
    const email = loginEmail.value;
    const signIn = signInWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        statusDiv.classList.remove('statusTextW');
        statusDiv.classList.add('statusTextR');
        statusDiv.style.color = 'green';
        statusDiv.innerHTML = 'Login succesful';
        setTimeout(() => {
          onNavigate('/posts');
        }, 1500);
      })
      .catch((error) => {
        const errorCode = error.code;
        statusDiv.classList.remove('statusTextR');
        statusDiv.classList.add('statusTextW');
        statusDiv.style.color = 'red';
        if (errorCode === 'auth/wrong-password') {
          statusDiv.innerHTML = 'Your password is incorrect. Try again';
        } else if (errorCode === 'auth/user-not-found') {
          statusDiv.innerHTML = 'User not found';
        } else if (errorCode === 'auth/invalid-email') {
          statusDiv.innerHTML = 'Invalid email';
        } else if (errorCode) {
          statusDiv.innerHTML = 'Something went wrong';
        }
      });
  });
  return root;
};