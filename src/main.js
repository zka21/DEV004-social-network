// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
import { welcome } from './components/welcome.js';
import { register } from './components/register.js';
import { loginwithGoogle } from './components/loginwithgoogle.js';
import { login } from './components/login.js';

// myFunction();
const rootDiv = document.getElementById('root');

const routes = {
  '/': welcome,
  '/login': login,
  '/register': register,
  '/loginwithGoogle': loginwithGoogle,
  // '/content': content,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());
