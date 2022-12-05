import cipher from './cipher.js';

const botonDecode = document.getElementById("cmdDecode");
botonDecode.addEventListener("click", function () {
  const textCode = document.getElementById('txtMessagedeco').value;
  const position = document.getElementById('intNumD').value;
  //const msgCode=document.getElementById("lblEncode");
  //alert(textCode,position);
  const messageAns = cipher.decode(position, textCode);
  document.getElementById("lblDecode").innerText = messageAns;

  //msgCode.value=messageAns

});

window.addEventListener("load", function () {
  cipher.fncUserName();
});