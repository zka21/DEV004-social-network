export const welcome = (onNavigate) => {
  const root = document.getElementById("root");
  root.innerHTML=`
  <div>
  <img src="./Imagenes/logo solo.png" alt="logocactus">
  <button id="buttonLogin"> iniciar sesion </button>
  <button> iniciar sesion con Google</button>
  <button  id="buttonRegister"> crear cuenta</button>
  </div>`
  const buttonLogin = document.getElementById("buttonLogin");
  const buttonRegister= document.getElementById("buttonRegister");
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  return welcomeDiv;
};
