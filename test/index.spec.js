  // importamos la funcion que vamos a testear
  import { login } from '../src/components/login.js';
  // import { signInWithEmail } from '../src/lib/firebaseFunctions.js'

  jest.mock('../src/lib/firebaseFunctions.js', ()=> (
  {
   signInWithEmail: jest.fn(()=> {
    return Promise.resolve({ email:'user@gmail.com'})
   })
  }
  ))

document.body.innerHTML = "<div id='root'></div>";

describe('función login', () => {

  it.only('cuando usuario y contraseña son correctas ser una función', (done) => {

    // firebaseFN.signInWithEmailAndPassword = jest.fn().mockResolvedValue({ email:'user@gmail.com'})
    const mockNavigate = jest.fn();
    const root = login(mockNavigate); // mostramos formulario
    root.querySelector('#inputUser').value = 'user@gmail.com'; // Traemos información
    root.querySelector('#inputPassword').value = '123456';
    root.querySelector('#buttonLogin').dispatchEvent(new Event('click')); // Hacemos verificación
    setTimeout(() => {
      // console.log("xx");
      expect(mockNavigate).toHaveBeenCalledWith('/posts'); // Expect debe tener onNavigate pero no tenemos valor en login como parámetro
      done();
    }, 0);
    expect(typeof login).toBe('function');
  });
  it('cuando usuario y contraseña son INcorrectas ser una función', () => {
    expect(typeof login).toBe('function');
  });

});