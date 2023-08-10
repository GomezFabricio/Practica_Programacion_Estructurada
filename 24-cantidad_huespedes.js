/* 
Análisis del problema:

Se necesita un programa que calcule la capacidad máxima de un hotel según la cantidad de habitaciones disponibles para 2, 3 y 4 personas.

Diseño:

El problema se puede resolver sumando el producto de la cantidad de habitaciones por su capacidad. 

Especificación del algoritmo:
*/

"use strict";

// Pedir al usuario la cantidad de habitaciones para cada tipo
let habitaciones2 = parseInt(prompt("Ingrese la cantidad de habitaciones para 2 personas:"));
let habitaciones3 = parseInt(prompt("Ingrese la cantidad de habitaciones para 3 personas:"));
let habitaciones4 = parseInt(prompt("Ingrese la cantidad de habitaciones para 4 personas:"));

// Calcular la capacidad máxima del hotel
let capacidadMaxima = (habitaciones2 * 2) + (habitaciones3 * 3) + (habitaciones4 * 4);

// Mostrar un mensaje con la capacidad máxima del hotel
alert("El hotel puede albergar un máximo de " + capacidadMaxima + " huéspedes.");

/* 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: cantidad de habitaciones para 2, 3 y 4 personas ingresadas por el usuario.
Post-condiciones: mensaje con la capacidad máxima del hotel.
*/
