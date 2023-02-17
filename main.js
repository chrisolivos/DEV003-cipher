const iniciar = {
  fncLogin: function (user, pass, opcion) {
    const c = 'CODE';
    const d = 'DECO';
  
    if (user === '' || pass === '') {
      alert("Debes ingresar todos los datos");
    } else {
      const combo = opcion;
      if (combo.value === c) {
        //alert("Redireccionando a CODFICAR MENSAJES");  
        sessionStorage.nombre = user;
        location.href = 'cifrar.html';
      } else if (combo.value === d) {
        //alert("Redireccionando a DECODFICAR MENSAJES");
        sessionStorage.nombre = user;
        location.href = 'descifrar.html';
      }
    }
  },
  
  fncUserName: function () {
    const userName = sessionStorage.nombre;
    document.getElementById('lblNameUser').innerHTML = userName;
  }
}
export default iniciar;