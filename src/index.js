import cipher from './cipher.js';
console.log(cipher);

function fncLogin() {
   // alert('ingreso');
  
    let c = "CODE";
    let d = "DECO";
    let response = ''; 

    if(document.getElementById("txtUser").value=='' || document.getElementById("txtPassword").value==''){
        alert("Debes ingresar todos los datos");
    }else{
        response=prompt("Ingresa COD (para codificar mensaje) o DECO (para decodificar mensaje)");
        //validar solo letras, 3 letras mayus
        if (response != d){ 
            //alert("Redireccionando a CODFICAR MENSAJES");  
            sessionStorage.nombre = document.getElementById("txtUser").value;
            location.href = 'cifrar.html';
         } else {   
            //alert("Redireccionando a DECODFICAR MENSAJES");
            sessionStorage.nombre = document.getElementById("txtUser").value;
            location.href = 'descifrar.html';
         }
       
    }
}

const botonLogin=document.getElementById("cmdLogin");
botonLogin.addEventListener("click",fncLogin);
