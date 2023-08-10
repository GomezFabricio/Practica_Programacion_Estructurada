"""
Análisis del problema:

Se necesita un programa que almacene una lista de nombres de integrantes de la familia y luego los muestre en un mensaje.

Diseño:

El problema consiste en crear un array de nombres de integrantes de la familia y luego mostrarlos en un mensaje.

Especificación del algoritmo:

1. Crear una variable llamada "familia" que sea un array de strings con los nombres de los integrantes de la familia.
2. Mostrar un mensaje que diga "Integrantes de la familia:".
3. Recorrer el array "familia" y, para cada nombre, mostrarlo en la consola utilizando el comando "print".

Escritura del programa:
"""
familia = ["Juan", "María", "Carlos", "Ana", "Pedro"]

print("Integrantes de la familia:")
for nombre in familia:
    print(nombre)

"""
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: lista de nombres de integrantes de la familia.
Post-condiciones: mensaje con los nombres listados.
"""
