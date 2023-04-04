// importamos la funcion que vamos a testear
import { login } from '../src/components/login.js';

describe.only('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
  it('debería tener un boton login', () => {
    expect()

  })
});
