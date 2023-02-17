import cipher from './cipher.js.js';


function fncLogin() {
  
    let c = 'CODE';
    let d = 'DECO';

    if(document.getElementById("txtUser").value=='' || document.getElementById("txtPassword").value==''){
        alert("Debes ingresar todos los datos");
    }else{
        let combo = document.getElementById("opcion");
        if (combo.value==c){ 
            //alert("Redireccionando a CODFICAR MENSAJES");  
            sessionStorage.nombre = document.getElementById("txtUser").value;
            location.href = 'cifrar.html';
         } else if(combo.value = d){   
            //alert("Redireccionando a DECODFICAR MENSAJES");
            sessionStorage.nombre = document.getElementById("txtUser").value;
            location.href = 'descifrar.html';
         }
       
    }
}

const botonLogin=document.getElementById("cmdLogin");
botonLogin.addEventListener("click",fncLogin);
