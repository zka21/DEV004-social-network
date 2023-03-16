import { createUserWithPassword } from '../lib/firebaseFunctions.js';
export const successText = document.getElementById('successText');
export const register = (onNavigate) => {
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
      <p id="successText"></p><br>
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

    try {
      const userCreated = await createUserWithPassword(emailInput.value, passwordInput.value);
      const user = userCreated.user;
      alert('Tu cuenta ha sido creada con exito.');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        alert('correo invalido');
      } else if (errorCode === 'auth/email-already-in-use') {
        alert('este correo esta registrado');
      } else if (errorCode === 'auth/weak-password') {
        alert('tu contraseña es debil');
      } else if (errorCode) {
        alert('algo salio mal, vuelve');
      }
    }
  });
};
