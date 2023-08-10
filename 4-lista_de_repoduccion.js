/* 
Análisis del problema:

Se identifica la necesidad de ingresar el nombre de una playlist y los títulos de tres canciones, y luego mostrar un mensaje con estos datos.

Diseño:

Se divide el problema en dos partes: ingresar datos de la playlist y los títulos de las canciones, y mostrar el mensaje final.

Especificación del algoritmo:

1. Mostrar un mensaje emergente al usuario con instrucciones para ingresar los datos de la playlist y las canciones.
2. Leer el nombre de la playlist ingresado por el usuario y almacenarlo en la variable "playlistNombre".
3. Leer el título de la primera canción ingresado por el usuario y almacenarlo en la variable "cancion1".
4. Leer el título de la segunda canción ingresado por el usuario y almacenarlo en la variable "cancion2".
5. Leer el título de la tercera canción ingresado por el usuario y almacenarlo en la variable "cancion3".
6. Concatenar los valores de "playlistNombre", "cancion1", "cancion2" y "cancion3" en una cadena para formar el mensaje final.
7. Mostrar el mensaje final en la consola utilizando el comando "console.log".

Escritura de programas:
*/

"use strict";

let playlistNombre = "";
let cancion1 = "";
let cancion2 = "";
let cancion3 = "";

alert("Ingrese los datos de la playlist y las canciones:");

playlistNombre = prompt("Nombre de la playlist:");
cancion1 = prompt("Título de la primera canción:");
cancion2 = prompt("Título de la segunda canción:");
cancion3 = prompt("Título de la tercera canción:");

let mensaje = "Se ha creado la playlist '" + playlistNombre + "' con las canciones '" + cancion1 + "', '" + cancion2 + "', '" + cancion3 + "'.";
console.log(mensaje);


/*
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados

Condiciones:

Pre-condiciones: datos de la playlist
Post-condiciones: Mensaje de la playlist
*/