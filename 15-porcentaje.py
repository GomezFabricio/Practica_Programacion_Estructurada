""" 
Análisis del problema:

Se necesita un programa que calcule el porcentaje de un número ingresado por el usuario, utilizando el porcentaje especificado.

Diseño:

El problema consiste en calcular el porcentaje de un número utilizando la fórmula correspondiente y luego mostrarlo en un mensaje.

Especificación del algoritmo:

1. Leer la entrada del usuario para el valor del número y almacenarlo en la variable "numero".
2. Leer la entrada del usuario para el valor del porcentaje y almacenarlo en la variable "porcentaje".
3. Calcular el porcentaje utilizando la fórmula (numero * porcentaje) / 100.
4. Mostrar un mensaje que indique el porcentaje calculado.

Escritura del programa:
"""

numero = float(input("Ingrese un número: "))
porcentaje = float(input("Ingrese el porcentaje que desea obtener: "))


porcentaje_calculado = (numero * porcentaje) / 100

print("El", porcentaje, "% de", numero, "es:", porcentaje_calculado)

""" 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: valores de número y porcentaje.
Post-condiciones: mensaje que indica el porcentaje calculado. 
"""
