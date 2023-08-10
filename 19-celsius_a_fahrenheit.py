"""
Análisis del problema:

Se necesita un programa que realice la conversión de grados Celsius a grados Fahrenheit.

Diseño:

El problema consiste en realizar la conversión de grados Celsius a grados Fahrenheit y mostrar el resultado en un mensaje.

Especificación del algoritmo:
"""

# Leer la cantidad de grados Celsius ingresados por el usuario
grados_celsius = float(input("Ingrese la cantidad de grados Celsius: "))

# Realizar la conversión de grados Celsius a grados Fahrenheit
grados_fahrenheit = (grados_celsius * 9/5) + 32

# Mostrar un mensaje con el resultado de la conversión
print(f"{grados_celsius} grados Celsius son equivalentes a {grados_fahrenheit:.2f} grados Fahrenheit")

"""
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: cantidad de grados Celsius.
Post-condiciones: mensaje con el resultado de la conversión a grados Fahrenheit.
"""
