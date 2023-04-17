// importamos la funcion que vamos a testear
import { login } from '../src/components/login.js';
import { register } from '../src/components/register.js';
import { signInWithEmail, createUserWithPassword } from '../src/lib/firebaseFunctions.js';
import { onNavigate } from '../src/router/index.js';

jest.mock('../src/lib/firebaseFunctions.js', () => (
  {
    signInWithEmail: jest.fn(() => Promise.resolve({ email: 'user@gmail.com' })),
  }
));

jest.mock('../src/lib/firebaseFunctions.js', () => (
  {
    createUserWithPassword: jest.fn(() => Promise.resolve({ email: 'user@gmail.com' })),
  }
));

jest.mock('../src/router/index.js', () => ({ onNavigate: jest.fn() }));

describe('función login', () => {
  it('cuando la promesa de login se cumple, pasa a ruta de posts', () => {
    document.body.innerHTML = "<div id='root'></div>";
    //document.body.innerHTML = "<div id='post'></div>";
    login();
    console.log(login());
    const buttonLogin = document.getElementById('buttonLogin');
    buttonLogin.click();
    expect(signInWithEmail).toHaveBeenCalledWith(expect.any(String), expect.any(String));
    return Promise.resolve().then(() => { expect(onNavigate).toHaveBeenCalledWith('/posts'); });
  });
  it('cuando usuario y contraseña son INcorrectas ser una función', () => {
    expect(typeof login).toBe('function');
  });
});

// describe('función register', () => {
//   it('cuando la promesa de register se cumple, pasa a ruta de posts', () => {
//     document.body.innerHTML = "<div id='root'></div>";
//     register();
//     const buttonRegister = document.getElementById('buttonCrearCuenta');
//     buttonRegister.click();
//     expect(createUserWithPassword).toHaveBeenCalledWith(expect.any(String), expect.any(String));
//     return Promise.resolve().then(() => { expect(onNavigate).toHaveBeenCalledWith('/posts'); });
//   });
//   it('cuando usuario y contraseña son INcorrectas ser una función', () => {
//     expect(typeof register).toBe('function');
//   });
// });
