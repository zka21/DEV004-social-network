export const register = ()  => {
    const root = document.getElementById("root");
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
        <button id="buttonNextOfRegister">Crear Cuenta</button>
      </div>
    </section>
    `
    
}