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
    // const divOfContentRegister = document.createElement("div");
    // const divRegister = document.createElement("div");
    // const divNames = document.createElement("div");

    // const imgOfRegister = document.createElement("img");
    // const h3OfRegister = document.createElement("h3");
    // const emailOfRegister = document.createElement("input");
    // const passwordOfRegister = document.createElement("input");
    // const conditionOfRegister = document.createElement("h6");
    // const buttonNextOfRegister = document.createElement("button");

    // const nameInput = document.createElement("input");
    // const lastnameInput = document.createElement("input");

    // imgOfRegister.src = "pruebadeimagen.jpg";
    // h3OfRegister.textContent = "Crea tu cuenta";
    // emailOfRegister.placeholder = "Correo electronico";
    // passwordOfRegister.placeholder = "Contraseña";
    // conditionOfRegister.textContent = "Al crear tu cuenta, estarás aceptando los términos y condiciones de Cáo";
    // buttonNextOfRegister.textContent = "Crear Cuenta";

    // nameInput.placeholder = "Nombre";
    // lastnameInput.placeholder = "Apellidos";

    // divOfContentRegister.append(divRegister, divNames);

    // divRegister.append(imgOfRegister, h3OfRegister);
    // divNames.append(nameInput, lastnameInput);
    // divOfContentRegister.append(emailOfRegister, passwordOfRegister, conditionOfRegister, buttonNextOfRegister);
    
    // return divOfContentRegister;
}