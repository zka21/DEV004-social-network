export const loginwithGoogle = (onNavigate) => {
  const root = document.getElementById('root');
  root.innerHTML = `
    <button id="regresarAlInicio">Regresar al inicio</button>
    `;
  const regresarAlInicio = document.getElementById('regresarAlInicio');
  regresarAlInicio.addEventListener('click', () => onNavigate('/'));
};
