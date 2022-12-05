import cipher from './cipher.js';
//console.log(cipher);
const botonLogin = document.getElementById("cmdLogin");
botonLogin.addEventListener("click", function () {
  const user = document.getElementById("txtUser").value;
  const pass = document.getElementById('txtPassword').value;
  const opcion = document.getElementById("opcion");
  //const msgCode=document.getElementById("lblEncode");
  //alert(textCode,position);
  //const messageAns= cipher.fncLogin(user,pass,opcion);
  cipher.fncLogin(user, pass, opcion);
  //document.getElementById("lblDecode").innerText=messageAns;
  //msgCode.value=messageAns
});