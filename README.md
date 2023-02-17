
# PROYECTO CYPHER

## Índice
* [1. Definición](#1-definición)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos del usuarioo](#3-objetivo-del-usuario)
* [4. Resolución de problemas](#4-resolución-de-problemas)
* [5. Prototipo](#5-prototipo)
* [6. Archivos contenidos](#6-archivos-contenidos)
* [7. Proceso de interacción](#7-proceso-de-interacción)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)

## 1.	Definición
El proyecto Cipher está desarrollado para la realización de codificación y decodificación de mensajes, según la variación de posición requerida del usuario. [Puedes acceder aquí al proyecto Cipher](https://chrisolivos.github.io/DEV003-cipher/ "Cipher")
## 2.	Resumen del proyecto
El presente proyecto fue desarrollado pesando en un servicio de inteligencia, comprendiendo la necesidad de envío y recepción de mensajes bajo una codificación que solo sea conocida por los usuarios implicados. 
## 3.	Objetivo del usuario
El objetivo manifestado por los usuarios, fue poder enviar y recibir sus mensajes bajo una codificación a elección propia del desplazamiento de los caracteres.
## 4.	Resolución de problemas
Con el presente proyecto se les permite una codificación y decodificación de los mensajes, según su elección del nuevo posicionamiento de los caracteres; siendo esto un servicio más personalizado y seguro para la encriptación.
## 5.	Prototipo
Imqgen de Login
![Imagen de Login](https://github.com/chrisolivos/DEV003-cipher/blob/main/src/Images/Prototipo/login.png)
Imagen de cifrar
![Imagen de codificar](https://github.com/chrisolivos/DEV003-cipher/blob/main/src/Images/Prototipo/codificar.png)
Imagen de descifrar
![Imagen de decodificar](https://github.com/chrisolivos/DEV003-cipher/blob/main/src/Images/Prototipo/decodificar.png)

## 6.	Archivos contenidos
-	Carpeta Images: Aquí encontraremos las imágenes utilizadas
-	Html:
*	Index: Permite el acceso del usuario mediante un usuario y contraseña (esto es solicitado debido al nivel de seguridad de la entidad)
*	Cifrar: Permite ingresar un mensaje y posición de desplazamiento para la encriptación del mismo; devuelve le mensaje codificado.
*	Descifrar: Permite ingresar un mensaje y posición en el que fue codificado para la encriptación del mismo; devuelve le mensaje original.
-	JS:
*	Index: Realiza el llamado de la función que validará el acceso y permitirá guardar el nombre del usuario ingresado.
*	Main: Se encuentran las funciones de ingreso del usuario y guardado del nombre del usuario que ingreso
*	Cipher: Se encuentra la función de codificación y decodificación del mensaje.
*	Cifrar: Se encuentra el llamado al método del botón que va a llamar la función de cifrado.
*	Descifrar: Se encuentra el llamado al método del botón que va a llamar la función de descifrado
-	Css:
*	Style: Encontraremos los estilos de las diferentes páginas.
 
## 7.	Proceso de interacción
-	Pantalla principal: La primera pantalla nos solicitará ingresar el usuario y su contraseña, de faltar ambos o alguno de los datos, enviará un mensaje solicitando el ingreso de los mismos. Luego de ingresar los datos se procede a seleccionar si desea CIFRAR o DESCIFRAR un mensaje, acto seguido dar clic al botón “Login”

Pantalla de Login
![Pantalla de login](https://github.com/chrisolivos/DEV003-cipher/blob/main/src/Images/Terminado/acceso.png)
Pantalla de mensaje al no ingresar datos completos: Usuario y clave
(No se está validando, solo debe escribir un Usuario y cualquier dato en clave)
![Pantalla datos vacios](https://github.com/chrisolivos/DEV003-cipher/blob/main/src/Images/Terminado/acceso_error.png)

-	Pantalla de Cifrado: Después de haber seleccionado cifrar, mostrará la pantalla en la cual se podrá ingresar el mensaje a cifrar, también nos permite ir a descifrar o volver a la pantalla inicial. También nos muestra el nombre del usuario que ingresó.

Pantalla Cifrado
![Pantalla cifrado](https://github.com/chrisolivos/DEV003-cipher/blob/main/src/Images/Terminado/codificar.png)

-	Pantalla de Descifrado: Después de haber seleccionado descifrar, mostrará la pantalla en la cual se podrá ingresar el mensaje a descifrar, también nos permite ir a cifrar o volver a la pantalla inicial. También nos muestra el nombre del usuario que ingresó.

Pantalla Decifrado
![Pantalla descifrado](https://github.com/chrisolivos/DEV003-cipher/blob/main/src/Images/Terminado/decodificar.png)

## 8.	Objetivos de aprendizaje


