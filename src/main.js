// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
import { welcome } from "./components/welcome.js";
import { register } from "./components/register.js";
import { loginwithGoogle } from "./components/loginwithgoogle.js";
import { login } from "./components/login.js";

// myFunction();
const rootDiv = document.getElementById("root");

const routes = {
  "/": welcome,
  "/login": login,
  "/register": register,
  "/loginwithGoogle": loginwithGoogle,
  // '/content': content,
};

const components = routes[window.location.pathname];
rootDiv.appendChild(register());
