import cipher from './cipher.js';
console.log(cipher);

function fncUserName() {
    const userName=sessionStorage.nombre;
    document.getElementById('lblNameUser').innerHTML = userName;     
}


function fncDecode(evt){
   
   // alert("Codificar ");
    evt.preventDefault();

    let messageDecode="";
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    let textMessage=document.getElementById('txtMessagedeco').value.toUpperCase();
    let lengthMessage=textMessage.length;
    let position=document.getElementById('intNumD').value;
   // let desplazar=document.getElementById('intNumC').value;
    let i = 0;
    let j = 0;
    let newPosition='';

    //browserType.indexOf('zilla');
    //cadena(dato a buscar)

    for (i = 0; i < lengthMessage; i++){
        abc.indexOf(textMessage.charAt(i - position));
        j = abc.indexOf(textMessage.charAt(i));
        newPosition='';
       // alert(j);
        newPosition = j - parseInt(position);
        // alert(newPosition);
        messageDecode = messageDecode + abc.charAt(newPosition);
       // messageEncode = messageEncode + abc.charAt(j);      
    }
   // alert(messageDecode);
    document.getElementById('lblDecode').innerText= messageDecode;
   // alert ('termino');
    
   //Submit.preventDefault();*/
} 

function fncDecodeAscii(event){
   
    event.preventDefault();

    let messageDecode="";
    let textMessage=document.getElementById('txtMessagedeco').value;
    let lengthMessage=textMessage.length;
    let position=document.getElementById('intNumD').value;

    let i = 0;
    let asciiOriginal = 0;
    let newPosition='';

    for (i = 0; i < lengthMessage; i++){
       asciiOriginal = textMessage.charCodeAt(i);
       newPosition = asciiOriginal - parseInt(position);
       messageDecode = messageDecode + String.fromCharCode(newPosition);
    }

    document.getElementById('lblDecode').innerText= messageDecode;

  } 


const botonDecode = document.getElementById("cmdDecode");
botonDecode.addEventListener("click",fncDecodeAscii);

window.addEventListener("load",fncUserName);