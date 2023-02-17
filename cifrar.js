import cipher from './cipher.js';
console.log(cipher);

function fncUserName() {
   //obtiene el nombre y lo muestra
    const user_Name=sessionStorage.nombre;
    document.getElementById('lblNameUser').innerHTML = user_Name;     
}


function fncEncode(event){
   
   // alert("Codificar ");
    event.preventDefault();

    let messageEncode="";
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/= ";
    //let abcCode = "DEFGHIJKLMNOPQRSTUVWXYZ";
    let textMessage=document.getElementById('txtMessage').value.toUpperCase();
    let lengthMessage=textMessage.length;
    let position=document.getElementById('intNumC').value;
    let i = 0;
    let j = 0;
    let newPosition='';

    //browserType.indexOf('zilla');
    //cadena(dato a buscar)
   //recorre el mensaje y optiene el ASCII
    for (i = 0; i < lengthMessage; i++){
        abc.indexOf(textMessage.charAt(i + position));
        j = abc.indexOf(textMessage.charAt(i));
        newPosition='';
        //alert(j);
        newPosition = j + parseInt(position);
       // alert(newPosition);
        messageEncode = messageEncode + abc.charAt(newPosition);
       // messageEncode = messageEncode + abc.charAt(j);      
    }
    alert(messageEncode);
    document.getElementById('lblEncode').innerText= messageEncode;
    alert ('termino');
    
} 



function fncEncodeAscii(event){
   
     event.preventDefault();
 
     let messageEncode="";
     let textMessage=document.getElementById('txtMessage').value;
     let lengthMessage=textMessage.length;
     let position=document.getElementById('intNumC').value;

     let i = 0;
     let asciiOriginal = 0;
     let newPosition='';
 
     for (i = 0; i < lengthMessage; i++){
        asciiOriginal = textMessage.charCodeAt(i);
        newPosition = asciiOriginal + parseInt(position);
         messageEncode = messageEncode + String.fromCharCode(newPosition);
     }

     document.getElementById('lblEncode').innerText= messageEncode;

   } 


   /*function valideKey(keyNumber){
    alert("ingreso");

      //almacena entrada del teclado
      let tecla = keyNumber.keyCode || keyNumber.wich;
      let teclado= string.fromCharCode(tecla);

      if(tecla==8) { // borrar digito.
        return true;
      } else if(tecla>=48 && tecla<=57) { // ASCII de numeros
        return true;
      } else{
        return false;
        alert ("Solo números enteros y positivos")
      }
  }*/


const botonEncode = document.getElementById("cmdEncode");
botonEncode.addEventListener("click",fncEncodeAscii);

//const keyPosition=document.getElementById("intNumC");
//keyPosition.addEventListener("onkeydonw",valideKey);

window.addEventListener("load",fncUserName);
//window.onkeydown(keyNumber);

// ((document.getElementById("intNumC".keyNumber)),valideKey);


