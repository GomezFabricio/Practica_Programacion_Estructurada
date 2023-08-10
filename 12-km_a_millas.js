/* 
Análisis del problema:

Se necesita un programa que convierta una cantidad de kilómetros ingresada por el usuario a millas.

Diseño:

El problema consiste en calcular el equivalente de una cantidad de kilómetros en millas y luego mostrarlo en un mensaje.

Especificación del algoritmo:

1. Leer la entrada del usuario para la cantidad en kilómetros y almacenarla en la variable "kilometros".
2. Calcular el equivalente de la cantidad en millas dividiendo los kilómetros por 1.60934 (factor de conversión de kilómetros a millas).
3. Mostrar un mensaje que indique la cantidad equivalente en millas.

Escritura del programa: 
*/
"use strict";

let kilometros = parseFloat(prompt("Ingrese la cantidad en kilómetros:"));
let millas = kilometros / 1.60934;

console.log(`La cantidad equivalente en millas es: ${millas.toFixed(2)} millas.`);

/* 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: cantidad en kilómetros.
Post-condiciones: mensaje que indica la cantidad equivalente en millas.
*/
