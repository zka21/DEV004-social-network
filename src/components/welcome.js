export const welcome = (onNavigate) => {
  const root = document.getElementById('root');
  root.innerHTML = `
  <div>
  <img class="imageLogo" src="./Imagenes/logo solo.png" alt="logocactus"><br><br>
  <button id="buttonLogin"> Iniciar sesion </button> <br><br>
  <button> Iniciar sesion con Google</button> <br><br>
  <button  id="buttonRegister"> Crear cuenta</button>
  </div>`;
  const buttonLogin = document.getElementById('buttonLogin');
  const buttonRegister = document.getElementById('buttonRegister');
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
};
