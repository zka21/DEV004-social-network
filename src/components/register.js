import { createUserWithPassword } from '../lib/index.js';

export const register = (onNavigate) => {
  const root = document.getElementById('root');
  root.innerHTML = `
    <section id="sectionOfContentRegister"> 
      <div id="divRegister">
        <img src="aqui ira iamgen de captus con flores">
        <h3 id="h3OfRegister"></h3>
        <div id="divNames">
            <input id="nameInput" type="text" placeholder="Nombre">
            <input id="lastnameInput" type="text" placeholder="Apellidos"> 
        </div>
        <input id="emailInput" type="email" placeholder ="Correo electronico">
        <input id="passwordInput" type="password" placeholder="Contraseña">
        <h6 id="conditionOfRegister">Al crear tu cuenta, estarás aceptando los términos y condiciones de Cáo</h6>
        <button id="buttonCrearCuenta">Crear Cuenta</button>
        <button id="regresarAlInicio">Regresar al inicio</button>
      </div>
    </section>
    `;
  const regresarAlInicio = document.getElementById('regresarAlInicio');
  regresarAlInicio.addEventListener('click', () => onNavigate('/'));

  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');

  const crearCuenta = document.getElementById('buttonCrearCuenta');
  crearCuenta.addEventListener('click', () => {
    createUserWithPassword(emailInput.value, passwordInput.value);
  });
};
