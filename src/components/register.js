const register = ()  => {
    const divOfContentRegister = document.createElement("div");
    const divRegister = document.createElement("div");
    const divNames = document.createElement("div");

    const imgOfRegister = document.createElement("img");
    const h3OfRegister = document.createElement("h3");
    const emailOfRegister = document.createElement("input");
    const passwordOfRegister = document.createElement("input");
    const conditionOfRegister = document.createElement("h6");
    const buttonNextOfRegister = document.createElement("button");

    const nameInput = document.createElement("input");
    const lastnameInput = document.createElemen("input");

    imgOfRegister.src = "pruebadeimagen.jpg";
    h3OfRegister.textContent = "Crea tu cuenta";
    emailOfRegister.placeholder = "Correo electronico";
    passwordOfRegister.placeholder = "Contraseña";
    conditionOfRegister.textContent = "Al crear tu cuenta, estarás aceptando los términos y condiciones de Cáo";
    buttonNextOfRegister.textContent = "SIGUIENTE";

    nameInput.placeholder = "Nombre";
    lastnameInput.placeholder = "Apellidos";

    divContentOfRegister.append(divRegister, divNames);

    divRegister.append(imgOfRegister, h3OfRegister, emailOfRegister, passwordOfRegister, conditionOfRegister, buttonNextOfRegister);
    divNames.append(nameInput, lastnameInput);

    return divOfContentRegister;
}