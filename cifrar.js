import cipher from './cipher.js';
console.log(cipher);

function fncUserName() {
    const user_Name=sessionStorage.nombre;
    document.getElementById('lblNameUser').innerHTML = user_Name;     
}


function fncEncode(){
   // const desplazamiento=4;
   // alert("Codificar ");
    let messageEncode="";
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let abcCode = "DEFGHIJKLMNOPQRSTUVWXYZ";
    let resultado="";
    let textMessage=document.getElementById('txtMessage').value;
    let desplazamiento=textMessage.length;
   // let desplazar=document.getElementById('intNumC').value;
    let i = 0;
    let j = 0;

    for (i = 0; i < desplazamiento; i++){
       
       // j = abc.indexOf(textMessage.charAt(i + desplazar));
       j = abc.indexOf(textMessage.charAt(i));
       // alert(j);
        messageEncode = messageEncode + abcCode.charAt(j);
       // messageEncode = messageEncode + abc.charAt(j);      
    }
    alert(messageEncode);
    document.getElementById('lblEncode').innerText= messageEncode;
    alert ('termino');
   // Event.preventDefault();
   Submit.preventDefault();
} 


const botonEncode = document.getElementById("cmdEncode");
botonEncode.addEventListener("click",fncEncode);

window.addEventListener("load",fncUserName);


