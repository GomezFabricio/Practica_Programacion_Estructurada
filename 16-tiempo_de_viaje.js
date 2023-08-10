/* 
Análisis del problema:

Se necesita un programa que calcule el tiempo que tardaría en completar un recorrido ingresado por el usuario utilizando distintos medios de transporte y sus respectivas velocidades.

Diseño:

El problema consiste en calcular el tiempo utilizando la fórmula distancia / velocidad para cada medio de transporte y luego mostrar los resultados en un mensaje.

Especificación del algoritmo:
*/

let distancia = parseFloat(prompt("Ingrese la distancia del recorrido en kilómetros:"));
const velocidades = {
  pie: 5,
  bici: 10,
  auto: 60,
  avion: 800
};

let tiempos = {};

for (let medio in velocidades) {
  tiempos[medio] = distancia / velocidades[medio];
}

// Mostrar los resultados
for (let medio in tiempos) {
  console.log(`Tiempo en ${medio}: ${tiempos[medio].toFixed(2)} horas`);
}

/* 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: distancia del recorrido.
Post-condiciones: tiempos para cada medio de transporte.
*/
