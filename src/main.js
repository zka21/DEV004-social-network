// Este es el punto de entrada de tu aplicacion

import { welcome } from './components/welcome.js';
import { register } from './components/register.js';
import { login } from './components/login.js';

import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from './firebase/firebaseConfig.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': welcome,
  '/login': login,
  '/register': register,
};

export const App = () => {
  const obtainData = async () => {
    const datos = await getDocs(collection(dataBase, 'usuarios'));
    console.log('estos son mis datos', datos.docs[0].data());
  };
  obtainData();
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
  rootDiv.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component(onNavigate));
