/* 
Análisis del problema:

Se necesita un programa que solicite al usuario tres gustos de helado, y luego devuelva un mensaje.

Diseño:

El problema se puede dividir en dos partes: Ingresar los sabores de helado y mostrar el mensaje.

Especificación del algoritmo:

1. Mostrar un mensaje emergente al usuario con el texto "Vamos a preparar un helado!".
2. Leer la entrada del usuario para el primer sabor de helado y almacenarlo en la variable "sabor_uno".
3. Leer la entrada del usuario para el segundo sabor de helado y almacenarlo en la variable "sabor_dos".
4. Leer la entrada del usuario para el tercer sabor de helado y almacenarlo en la variable "sabor_tres".
5. Concatenar los valores de "sabor_uno", "sabor_dos" y "sabor_tres" en una cadena formando el mensaje del helado.
6. Mostrar el mensaje del helado en la consola utilizando el comando "console.log".

Escritura del programa: 
*/
"use strict";

let sabor_uno= ""
let sabor_dos= ""
let sabor_tres= ""

alert("Vamos a preparar un helado!")
sabor_uno =  prompt("Por favor. Ingrese el primer sabor")
sabor_dos =  prompt("Ahora ingrese el segundo sabor")
sabor_tres = prompt("Ya casi esta listo su helado! Solo falta el tercer sabor")

console.log("Aqui tiene su helado de " + sabor_uno + ", " + sabor_dos + " y " + sabor_tres)

/* 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados

Condiciones:

Pre-condiciones: sabroes de helado.
Post-condiciones: mensaje.
*/