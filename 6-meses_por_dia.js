/* 
Análisis del problema:

Se requiere crear arrays de meses con diferentes días y mostrarlos en un mensaje.

Diseño:

Definir arrays para meses con diferentes días.

Especificación del algoritmo:

1. Definir un array llamado "meses_31" con los nombres de los meses que tienen 31 días.
2. Definir un array llamado "meses_30" con los nombres de los meses que tienen 30 días.
3. Definir un array llamado "meses_29" con los nombres de los meses que tienen 29 días (febrero en años bisiestos).
4. Crear una función llamada "mostrarMeses" que reciba un array de meses y retorne una cadena formateada.
5. Mostrar los resultados en mensajes utilizando la función "mostrarMeses" para cada array.

Escritura del programa: 
*/
"use strict";

let meses_31 = ["Enero", "Marzo", "Mayo", "Julio", "Agosto", "Octubre", "Diciembre"];
let meses_30 = ["Abril", "Junio", "Septiembre", "Noviembre"];
let meses_29 = ["Febrero (en años bisiestos)"];

function mostrarMeses(meses) {
    return meses.join(", ");
}

console.log("Meses con 31 días: " + mostrarMeses(meses_31));
console.log("Meses con 30 días: " + mostrarMeses(meses_30));
console.log("Meses con 29 días: " + mostrarMeses(meses_29));

/* 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: N/A.
Post-condiciones: Mensajes con nombres de meses.
*/
