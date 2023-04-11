import { createUserWithPassword } from '../lib/firebaseFunctions.js';
import { onNavigate } from '../router/index.js';

// const nameInput = document.getElementById('nameInput');
// const lastnameInput = document.getElementById('lastnameInput');

export const register = () => {
  const root = document.getElementById('root');
  root.innerHTML = `
    <section id="sectionOfContentRegister" class="button-container"> 

      <div id="logo" class="logo-container">
        <img class="imageLogo" src="./Imagenes/logoSolo.png">
      </div>

      <h3 id="h3OfRegister" class="greenText">Crea tu cuenta</h3><br>

      <div id="divNames">
          <input id="nameInput" class="inputNames" type="text" placeholder="Nombre">
          <input id="lastnameInput" class="inputNames" type="text" placeholder="Apellidos"> 
      </div> <br>

      <input id="emailInput" class="inputNames" type="email" placeholder ="Correo electronico"> <br>
      <input id="passwordInput" class="inputNames" type="password" placeholder="Contraseña"><br>

      <p id="statusText"></p><br>
      <h6 id="conditionOfRegister" class="greenText">Al crear tu cuenta, estarás aceptando los <br> <spam class="highlightedText" >términos y condiciones</spam> de Cáo</h6><br>

      <div id="divButtons">
        <button id="buttonCrearCuenta" class="buttonsTogether">Crear Cuenta</button>
        <button id="regresarAlInicio" class="buttonsTogether">Regresar al inicio</button>
      </div>
    </section>
    `;
  const regresarAlInicio = document.getElementById('regresarAlInicio');
  regresarAlInicio.addEventListener('click', () => onNavigate('/'));

  const emailInput = document.getElementById('emailInput');
  const nameInput = document.getElementById('nameInput');
  const lastnameInput = document.getElementById('lastnameInput');
  const passwordInput = document.getElementById('passwordInput');

  const crearCuenta = document.getElementById('buttonCrearCuenta');
  crearCuenta.addEventListener('click', async () => {
    // const displayName = nameInput.value + lastnameInput.value;
  // para cuando se caegue el dom, y aqui dentro traeremos datos de firestore
    window.addEventListener('DOMContentLoaded', () => {
      saveUsers(nameInput.value, lastnameInput.value);
      console.log('aqui quiero poder guardar nombre y apellido' + saveUsers())
    });
    try {
      const userCreated = await createUserWithPassword(emailInput.value, passwordInput.value);
      const user = userCreated.user;
      const statusDiv = document.getElementById('statusText');
      statusDiv.classList.remove('statusTextW');
      statusDiv.classList.add('statusTextR');
      statusDiv.style.color = 'green';
      statusDiv.innerHTML = 'Your account has been succesfully created';
    } catch (error) {
      const errorCode = error.code;
      const statusDiv = document.getElementById('statusText');
      statusDiv.classList.remove('statusTextR');
      statusDiv.classList.add('statusTextW');
      statusDiv.style.color = 'red';
      if (errorCode === 'auth/invalid-email') {
        statusDiv.innerHTML = 'Invalid email. Try again';
      } else if (errorCode === 'auth/email-already-in-use') {
        statusDiv.innerHTML = 'This email is already in use. Try a new one';
      } else if (errorCode === 'auth/weak-password') {
        statusDiv.innerHTML = 'Your password is weak. Try more charachters';
      } else if (errorCode) {
        statusDiv.innerHTML = 'Something went wrong';
      }
    }
  });
};
