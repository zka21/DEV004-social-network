export const login = (onNavigate) => {
  const root = document.getElementById('root');
  root.innerHTML = `
  <section id="sectionOfLogin"> 
    <div id = "loginDiv">
    <img class="imageLogo" src="./Imagenes/logo solo.png" alt="imagenLogo">
    <h2>Inciar Sesión</h2>
    <div id = "userDiv">
      <input id="inputUser" type="email" placeholder= "Correo Electrónico"></input>
      <input id="inputPassword" type="password" placeholder= "Contraseña"></input>
    </div>
    <div id="buttons">
    <button id="buttonLogin">Siguiente</button>
    <button id="returnToWelcome">Regresar al inicio</button>
    </div>
    </div>
  </section>
  `;

  const returnToWelcome = document.getElementById('returnToWelcome');
  returnToWelcome.addEventListener('click', () => onNavigate('/'));
};
