// importamos la funcion que vamos a testear
import { login } from '../src/components/login.js';
import { register } from '../src/components/register.js';
import { signInWithEmail, createUserWithPassword } from '../src/lib/firebaseFunctions.js';
import { onNavigate } from '../src/router/index.js';

jest.mock('../src/lib/firebaseFunctions.js', () => (
  {
    createUserWithPassword: jest.fn(() => Promise.resolve({ user: { email: 'user@gmail.com' } })),
    signInWithEmail: jest.fn(() => Promise.resolve({ email: 'user@gmail.com' })),
  }
));

jest.mock('../src/router/index.js', () => ({ onNavigate: jest.fn() }));
afterEach(() => {
  jest.clearAllMocks();
});
describe('función login', () => {
  it('cuando la promesa de login se cumple, pasa a ruta de posts', (done) => {
    document.body.innerHTML = "<div id='root'></div>";
    // document.body.innerHTML = "<div id='post'></div>";
    login();
    console.log(login());
    const buttonLogin = document.getElementById('buttonLogin');
    buttonLogin.click();
    // const signInWithEmail = jest.fn(() => Promise.resolve({ email: 'user@gmail.com' }));
    setTimeout(() => {
      expect(onNavigate).toHaveBeenCalledWith('/posts');
      expect(signInWithEmail).toHaveBeenCalledWith(expect.any(String), expect.any(String));
      done();
    }, 0);
  });
  it('cuando usuario y contraseña son INcorrectas ser una función', () => {
    expect(typeof login).toBe('function');
  });
});

describe('función register', () => {
  it('cuando la promesa de register se cumple, pasa a ruta de posts', (done) => {
    document.body.innerHTML = "<div id='root'></div>";
    register();
    const buttonRegister = document.getElementById('buttonCrearCuenta');
    buttonRegister.click();
    setTimeout(() => {
      expect(onNavigate).toHaveBeenCalledWith('/posts');
      expect(createUserWithPassword).toHaveBeenCalledWith(expect.any(String), expect.any(String));
      done();
    }, 0);
  });
  it('cuando usuario y contraseña son INcorrectas ser una función', () => {
    expect(typeof register).toBe('function');
  });
});
