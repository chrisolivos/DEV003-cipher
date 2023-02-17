const cipher = {
  encode: function (pos, text) {

    let messageEncode = "";
    const textMessage = text;
    const lengthMessage = textMessage.length;
    const position = parseInt(pos);
    //console.log( typeof text);
    //console.log(typeof pos);
    
    if (typeof text !=="string" || typeof position !=="number"){
      throw new TypeError();
    }
    
    let i = 0;
    let asciiChar = 0;
    let newPosition = '';

    for (i = 0; i < lengthMessage; i++) {
      asciiChar = textMessage.charCodeAt(i);
      //MAYUSCULAS
      if (asciiChar >=65 && asciiChar<=90 ){
        //posLetra+ nuevaposicion  %26 (cantidad de letars en el alfabeto
        newPosition = (((parseInt(asciiChar)-65 + parseInt(position))%26)+65);
        messageEncode = messageEncode + String.fromCharCode((newPosition));
      //minusculas
      }else if(asciiChar >=97 && asciiChar<=122){
        newPosition =  (((parseInt(asciiChar)-97+ parseInt(position))%26)+97);
        messageEncode = messageEncode + String.fromCharCode(newPosition);
      }else { 
        messageEncode = messageEncode + String.fromCharCode(asciiChar);
      }
    }
    return messageEncode;
  },

  decode: function (pos, text) {
    let messageDecode = "";
    const textMessage = text;
    const lengthMessage = textMessage.length;
    const position = parseInt(pos);

    if (typeof textMessage !=="string" || typeof position !=="number"){
      throw new TypeError();
    }
    
    let i = 0;
    let asciiChar = 0;
    let newPosition = '';

    for (i = 0; i < lengthMessage; i++) {
      asciiChar = textMessage.charCodeAt(i);
      //MAYUSCULAS
      if (asciiChar >=65 && asciiChar<=90 ){
        //posLetra - nuevaposicion  %26 (cantidad de letars en el alfabeto)
        newPosition = (((parseInt(asciiChar)-90 - parseInt(position))%26)+90);
        messageDecode = messageDecode + String.fromCharCode((newPosition));
      //minusculas
      }else if(asciiChar >=97 && asciiChar<=122){
        newPosition =  (((parseInt(asciiChar)-122- parseInt(position))%26)+122);
        messageDecode = messageDecode + String.fromCharCode(newPosition);
        //otros caracteres
      }else{
        messageDecode = messageDecode + String.fromCharCode(asciiChar);
      }
    }
    return messageDecode;
  },
}
export default cipher;
