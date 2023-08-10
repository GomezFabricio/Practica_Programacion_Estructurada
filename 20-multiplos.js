/* 
Análisis del problema:

Se necesita un programa que determine si un número es múltiplo de otro número utilizando el operador módulo (%).

Diseño:

El problema se puede resolver verificando si el resto de la división entre los dos números es igual a cero.

Especificación del algoritmo:
*/

// Leer los números ingresados por el usuario
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Verificar si numero1 es múltiplo de numero2
let esMultiplo = numero1 % numero2 === 0;

// Mostrar un mensaje indicando si es múltiplo o no
if (esMultiplo) {
  console.log(`${numero1} es múltiplo de ${numero2}`);
} else {
  console.log(`${numero1} no es múltiplo de ${numero2}`);
}

/* 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: dos números ingresados por el usuario.
Post-condiciones: mensaje indicando si el primer número es múltiplo del segundo.
*/
