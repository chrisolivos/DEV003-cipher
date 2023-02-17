import cipher from './cipher.js';
import iniciar from './main.js';
const botonCode = document.getElementById("cmdEncode");
botonCode.addEventListener("click", function () {
  const textCode = document.getElementById('txtMessage').value;
  const position = document.getElementById('intNumC').value;
  const messageAns = cipher.encode(position, textCode);
  document.getElementById("lblEncode").innerText = messageAns;
});
window.addEventListener("load", function () {
  iniciar.fncUserName();
})