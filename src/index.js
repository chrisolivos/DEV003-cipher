import iniciar from './main.js';

const botonLogin = document.getElementById("cmdLogin");
botonLogin.addEventListener("click", function () {
  const user = document.getElementById("txtUser").value;
  const pass = document.getElementById('txtPassword').value;
  const opcion = document.getElementById("opcion");
  iniciar.fncLogin(user, pass, opcion);
});

