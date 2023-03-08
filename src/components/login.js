import { onNavigate } from '../main.js';
export const login = () => {
  const loginDiv = document.createElement('div');
  const loginWelcomeText = document.createTextNode('Iniciar Sesión');
  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonlogin = document.createElement('button');
  const returnToWelcome = document.createElement('button');

  inputUser.setAttribute('value', 'Correo electrónico');
  inputPassword.setAttribute('value', 'Contraseña');
  buttonlogin.textContent = 'Siguiente';
  returnToWelcome.textContent = 'Regresar al inicio';

  returnToWelcome.addEventListener('click', () => onNavigate('/'));

  loginDiv.appendChild(loginWelcomeText);
  loginDiv.appendChild(inputUser);
  loginDiv.appendChild(inputPassword);
  loginDiv.appendChild(buttonlogin);
  loginDiv.appendChild(returnToWelcome);

  return loginDiv;
};
