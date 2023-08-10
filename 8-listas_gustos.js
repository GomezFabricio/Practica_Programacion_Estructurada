/* 
Análisis del problema:

Se necesita un programa que almacene arrays de strings con nombres de distintas categorías de gustos y luego muestre los nombres en un mensaje indicando cuál es cuál.

Diseño:

El problema consiste en crear arrays de gustos en distintas categorías y luego mostrarlos en un mensaje.

Especificación del algoritmo:

1. Crear variables que sean arrays de strings para cada categoría de gustos (p.ej., peliculas, cantantes, libros).
2. Completar cada array con los nombres correspondientes.
3. Mostrar un mensaje para cada categoría indicando cuál es cuál y listando los nombres.

Escritura del programa:
*/
const peliculas = ["Matrix", "Star Wars", "Inception", "Avatar"];
const cantantes = ["Adele", "Ed Sheeran", "Beyoncé", "Coldplay"];
const libros = ["Harry Potter", "1984", "Cien años de soledad", "El principito"];

console.log("Categorías de gustos:");
console.log("Películas: " + peliculas.join(", "));
console.log("Cantantes: " + cantantes.join(", "));
console.log("Libros: " + libros.join(", "));

/* 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: arrays de nombres de distintas categorías de gustos.
Post-condiciones: mensajes que indican cuál es cuál y listan los nombres.
*/
