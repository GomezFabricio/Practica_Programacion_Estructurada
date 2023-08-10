/* 
Análisis del problema:

Se necesita un programa que calcule la cantidad de caracteres en un texto ingresado por el usuario.

Diseño:

El problema se puede resolver utilizando la propiedad "length" de las cadenas de texto en JavaScript.

Especificación del algoritmo:
*/

"use strict";

let texto = prompt("Ingrese un texto:");
let cantidadCaracteres = texto.length;

alert("El texto tiene " + cantidadCaracteres + " caracteres.");

/* 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: texto ingresado por el usuario.
Post-condiciones: mensaje con la cantidad de caracteres del texto.
*/
