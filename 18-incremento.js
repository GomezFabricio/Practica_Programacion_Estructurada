/* 
Análisis del problema:

Se necesita un programa que realice incrementos sucesivos a un número inicial ingresado por el usuario y muestre mensajes que indiquen el número del incremento y el total acumulado.

Diseño:

El problema consiste en realizar incrementos sucesivos a partir de un número inicial, mostrando mensajes que indiquen el número del incremento y el total acumulado.

Especificación del algoritmo:
*/

"use strict";

// Leer el número inicial y la cantidad de incremento ingresados por el usuario
let numero_inicial = parseFloat(prompt("Ingrese el número inicial: "));
let incremento = parseFloat(prompt("Ingrese la cantidad a incrementar en cada paso: "));

let total_acumulado = numero_inicial;

// Mostrar cinco mensajes seguidos con el número del incremento y el total acumulado
for (let i = 1; i <= 5; i++) {
    total_acumulado += incremento;
    console.log(`Incremento ${i}) Total: ${total_acumulado}`);
}

/*
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: número inicial y cantidad de incremento.
Post-condiciones: mensajes con el número del incremento y el total acumulado.
*/
