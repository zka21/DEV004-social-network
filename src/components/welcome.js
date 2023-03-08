import { onNavigate } from '../main.js';
export const welcome = () => {
  const welcomeDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const buttonLoginWithGoogle = document.createElement('button');
  const imageOfWelcome = document.createElement('img');

  buttonLogin.textContent = 'Iniciar sesión';
  buttonLoginWithGoogle.textContent = 'Iniciar sesión con Google';
  buttonRegister.textContent = 'Crear cuenta nueva';
  imageOfWelcome.src = 'logo.png'; // Formato de imagen PNG.

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  welcomeDiv.appendChild(buttonLogin);
  welcomeDiv.appendChild(buttonLoginWithGoogle);
  welcomeDiv.appendChild(buttonRegister);
  welcomeDiv.appendChild(imageOfWelcome); // Falta agregar imagen logo

  return welcomeDiv;
};
