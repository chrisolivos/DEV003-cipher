const cipher = {
  encode: function (pos, text) {

    //const messageArray=string.split(''); recorre string

    let messageEncode = "";
    const textMessage = text;
    const lengthMessage = textMessage.length;
    const position = pos;

    let i = 0;
    let asciiOriginal = 0;
    let newPosition = '';

    for (i = 0; i < lengthMessage; i++) {
      asciiOriginal = textMessage.charCodeAt(i);
      newPosition = asciiOriginal + parseInt(position);
      messageEncode = messageEncode + String.fromCharCode(newPosition);
    }

    return messageEncode;

  },

  decode: function (pos, text) {
    let messageDecode = "";
    const textMessage = text;
    const lengthMessage = textMessage.length;
    const position = pos;

    let i = 0;
    let asciiOriginal = 0;
    let newPosition = '';

    for (i = 0; i < lengthMessage; i++) {
      asciiOriginal = textMessage.charCodeAt(i);
      newPosition = asciiOriginal - parseInt(position);
      messageDecode = messageDecode + String.fromCharCode(newPosition);
    }

    return messageDecode;

  },

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

export default cipher;
