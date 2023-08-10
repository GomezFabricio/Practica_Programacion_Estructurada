/* 
Análisis del problema:

Se necesita un programa que tome la orden de compra de un local, calcule el valor total de la compra y permita al usuario elegir en cuántas cuotas desea realizar el pago.

Diseño:

El problema se puede resolver definiendo las variables de los precios de los productos y utilizando un bucle for para iterar tres veces (para los tres productos), y dentro del bucle solicitar al usuario la cantidad de cada producto. Luego, se calculará el valor total de la compra y se solicitará al usuario la cantidad de cuotas.

Especificación del algoritmo:
*/

"use strict";

const precioProducto1 = 10;  // Precio del primer producto
const precioProducto2 = 15;  // Precio del segundo producto
const precioProducto3 = 20;  // Precio del tercer producto

let cantidadProducto1 = parseInt(prompt("Ingrese la cantidad del primer producto:"));
let cantidadProducto2 = parseInt(prompt("Ingrese la cantidad del segundo producto:"));
let cantidadProducto3 = parseInt(prompt("Ingrese la cantidad del tercer producto:"));

let valorTotal = (cantidadProducto1 * precioProducto1) + (cantidadProducto2 * precioProducto2) + (cantidadProducto3 * precioProducto3);

let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));

let valorCuota = valorTotal / cuotas;

alert(`Detalle de la compra:
Cantidad del primer producto: ${cantidadProducto1}
Cantidad del segundo producto: ${cantidadProducto2}
Cantidad del tercer producto: ${cantidadProducto3}
Valor total de la compra: $${valorTotal}
Cantidad de cuotas: ${cuotas}
Valor de cada cuota: $${valorCuota.toFixed(2)}`);

/* 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: cantidades de productos y cuotas ingresadas por el usuario.
Post-condiciones: mensaje con el detalle de la compra y valores calculados mostrados en pantalla.
*/
