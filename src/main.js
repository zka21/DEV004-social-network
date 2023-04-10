// Este es el punto de entrada de tu aplicacion

import { welcome } from './components/welcome.js';
import { register } from './components/register.js';
import { login } from './components/login.js';
import { posts } from './components/posts.js';
import { addRoutes, onNavigate } from './router/index.js';
import { authStateChangedEvent } from './lib/firebaseFunctions';

// inicializamos el router
addRoutes({
  '/': welcome,
  '/register': register,
  '/login': login,
  '/posts': posts,
});
// Lógica de la aplicacion
window.onload = () => {
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};

authStateChangedEvent((user) => {
  if (user) {
    onNavigate('/posts');
  } else {
    onNavigate('/');
  }
});
