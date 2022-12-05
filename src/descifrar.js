import cipher from './cipher.js';
import iniciar from './main.js';

const botonDecode = document.getElementById("cmdDecode");
botonDecode.addEventListener("click", function () {
  const textCode = document.getElementById('txtMessagedeco').value;
  const position = document.getElementById('intNumD').value;
  const messageAns = cipher.decode(position, textCode);
  document.getElementById("lblDecode").innerText = messageAns;
});
window.addEventListener("load", function () {
  iniciar.fncUserName();
});