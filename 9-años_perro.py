"""
Análisis del problema:

Se necesita un programa que convierta una edad ingresada por el usuario en años humanos a años perro.

Diseño:

El problema consiste en calcular el equivalente de una edad en años perro y luego mostrarlo en un mensaje.

Especificación del algoritmo:

1. Leer la entrada del usuario para la edad y almacenarla en la variable "edad_humana".
2. Calcular el equivalente de la edad en años perro multiplicando la edad humana por 7.
3. Mostrar un mensaje que indique la edad equivalente en años perro.

Escritura del programa:
"""

edad_humana = int(input("Ingrese su edad en años humanos: "))
edad_perro = edad_humana * 7

print(f"Su edad equivalente en años perro es: {edad_perro} años.")

"""
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: edad en años humanos.
Post-condiciones: mensaje que indica la edad equivalente en años perro.
"""
