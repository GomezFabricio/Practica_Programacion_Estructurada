/*
Análisis del problema:

Se necesita un programa que convierta una cantidad de minutos ingresada por el usuario a segundos.

Diseño:

El problema consiste en calcular el equivalente de una cantidad de minutos en segundos y luego mostrarlo en un mensaje.

Especificación del algoritmo:

1. Leer la entrada del usuario para la cantidad en minutos y almacenarla en la variable "minutos".
2. Calcular el equivalente de la cantidad en segundos multiplicando los minutos por 60.
3. Mostrar un mensaje que indique la cantidad equivalente en segundos.

Escritura del programa:
*/

"use strict";


let minutos = parseInt(prompt("Ingrese la cantidad en minutos:"));
let segundos = minutos * 60;

alert(`La cantidad equivalente en segundos es: ${segundos} segundos.`);

/*
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: cantidad en minutos.
Post-condiciones: mensaje que indica la cantidad equivalente en segundos.
*/
