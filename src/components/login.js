const login = () => {
    const loginDiv = document.createElement("div");
    const loginWelcomeText = document.createTextNode("Iniciar Sesión");
    const inputUser = document.createElement("input");
    const inputPassword = document.createElement("input");
    const buttonlogin = document.createElement("button");


    inputUser.setAttribute("value", "Correo electrónico");
    inputPassword.setAttribute("value", "Contraseña");
    buttonlogin.textContent("Siguiente");

    loginDiv.appendChild(loginWelcomeText);
    loginDiv.appendChild(inputUser);
    loginDiv.appendChild(inputPassword);
    loginDiv.appendChild(buttonlogin);

    return loginDiv;
}