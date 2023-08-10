"""
Análisis del problema:

Se necesita un programa que convierta una cantidad de días ingresada por el usuario a segundos.

Diseño:

El problema consiste en calcular el equivalente de una cantidad de días en segundos y luego mostrarlo en un mensaje.

Especificación del algoritmo:

1. Leer la entrada del usuario para la cantidad en días y almacenarla en la variable "dias".
2. Calcular el equivalente de la cantidad en segundos multiplicando los días por 24 (horas por día), luego por 60 (minutos por hora), y finalmente por 60 (segundos por minuto).
3. Mostrar un mensaje que indique la cantidad equivalente en segundos.

Escritura del programa:
"""


dias = int(input("Ingrese la cantidad en días: "))
segundos = dias * 24 * 60 * 60

print(f"La cantidad equivalente en segundos es: {segundos} segundos.")

"""
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: cantidad en días.
Post-condiciones: mensaje que indica la cantidad equivalente en segundos.
"""
