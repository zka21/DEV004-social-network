export const welcome = () => {
    const welcomeDiv = document.createElement("div");
    const buttonLogin = document.createElement("button");
    const buttonRegister = document.createElement("button");
    const buttonLoginWithGoogle = document.createElement("button");
    const imageOfWelcome = document.createElement("img");

    buttonLogin.textContent = "Iniciar sesión";
    buttonLoginWithGoogle.textContent = "Iniciar sesión con Google";
    buttonRegister.textContent = "Crear cuenta nueva";
    imageOfWelcome.src = "logo.png"; // Formato de imagen PNG.

    welcomeDiv.appendChild(buttonLogin);
    welcomeDiv.appendChild(buttonLoginWithGoogle);
    welcomeDiv.appendChild(buttonRegister);
    welcomeDiv.appendChild(imageOfWelcome); // Falta agregar imagen logo

    return welcomeDiv;
};


  