import cipher from './cipher.js';

const botonCode = document.getElementById("cmdEncode");
botonCode.addEventListener("click", function () {
  const textCode = document.getElementById('txtMessage').value;
  const position = document.getElementById('intNumC').value;
  //const msgCode=document.getElementById("lblEncode");
  //alert(position);
  const messageAns = cipher.encode(position, textCode);
  document.getElementById("lblEncode").innerText = messageAns;
});
window.addEventListener("load", function () {
  cipher.fncUserName();
});