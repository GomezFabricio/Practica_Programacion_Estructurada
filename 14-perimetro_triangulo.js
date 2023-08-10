/* 
Análisis del problema:

Se necesita un programa que calcule el perímetro de un rectángulo a partir de la altura y el ancho ingresados por el usuario.

Diseño:

El problema consiste en calcular el perímetro de un rectángulo utilizando la fórmula correspondiente y luego mostrarlo en un mensaje.

Especificación del algoritmo:

1. Leer la entrada del usuario para el valor de la altura y almacenarlo en la variable "altura".
2. Leer la entrada del usuario para el valor del ancho y almacenarlo en la variable "ancho".
3. Calcular el perímetro del rectángulo utilizando la fórmula 2 * (altura + ancho).
4. Mostrar un mensaje que indique el perímetro calculado.

Escritura del programa: 
*/

"use strict";

let altura = parseFloat(prompt("Ingrese el valor de la altura del rectángulo:"));
let ancho = parseFloat(prompt("Ingrese el valor del ancho del rectángulo:"));
let perimetro = 2 * (altura + ancho);

// Mostrar el resultado
console.log("El perímetro del rectángulo es: " + perimetro.toFixed(2));

/* 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: valores de altura y ancho.
Post-condiciones: mensaje que indica el perímetro calculado.
*/
