export const login = (onNavigate) => {
  const root = document.getElementById('root');
  root.innerHTML = `
  <section id="sectionOfLogin"> 
  <div id="logoContainer">
  <img class="imageLogo" src="./Imagenes/logo solo.png" alt="imagenLogo">
  </div>
  <div id="loginDiv">
    <h2 class="login-title">Iniciar Sesión</h2><br>
    <div id = "userDiv">
      <input id="inputUser" type="email" placeholder= "Correo Electrónico"></input> <br>
      <input id="inputPassword" type="password" placeholder= "Contraseña"></input>
    </div>
    <div id="buttons">
    <button id="buttonLogin">SIGUIENTE</button> <br> 
    <button id="returnToWelcome">REGRESAR AL INICIO</button>
    </div>
    </div>
  </section>
  `;

  const returnToWelcome = document.getElementById('returnToWelcome');
  returnToWelcome.addEventListener('click', () => onNavigate('/'));
};
