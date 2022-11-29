//import cipher from './cipher.js';

//console.log(cipher);

function fnc_traerNombre() {
    /*Al cargar la pagina obtine el nombre de la session*/
   //var nomusuario = sessionStorage.nomusuario;
   /*asigna el nombre al objeto id Player*/
   //var element = document.getElementById("DivContenedor");
   var nombre= document.getElementById('txtusuario').textContent
  alert('ingreso');
    document.getElementById('lblnomusuario').innerHTML = nombre;
       
      
}

function entrar() {
   // alert('ingreso');
  
    var c = "CODE";
    var d = "DECO";
    var response = '';

   // if (response != d){ 
   //     alert("Redireccionando a CODFICAR MENSAJES");  
   //     location.href = 'cifrar.html';
   // } else { 
   ///     alert("Redireccionando a DECODFICAR MENSAJES");
   // }
    

    if(document.getElementById("txtusuario").value=='' || document.getElementById("txtpassword").value==''){
        alert("Debes ingresar todos los datos");
    }else{
        response=prompt("Ingresa COD (para codificar mensaje) o DECO (para decodificar mensaje)");
        //validar solo letras, 3 letras mayus
        if (response != d){ 
            alert("Redireccionando a CODFICAR MENSAJES");  
            location.href = 'cifrar.html';
         } else { 
            alert("Redireccionando a DECODFICAR MENSAJES");
         }
       
    }
}

