""" 
Análisis del problema:

Se necesita un programa que calcule el área de un triángulo a partir de la base y la altura ingresadas por el usuario.

Diseño:

El problema consiste en calcular el área de un triángulo utilizando la fórmula correspondiente y luego mostrarlo en un mensaje.

Especificación del algoritmo:

1. Leer la entrada del usuario para el valor de la base y almacenarlo en la variable "base".
2. Leer la entrada del usuario para el valor de la altura y almacenarlo en la variable "altura".
3. Calcular el área del triángulo utilizando la fórmula (base * altura) / 2.
4. Mostrar un mensaje que indique el área calculada.

Escritura del programa: 
"""
# Leer el valor de la base ingresado por el usuario
base = float(input("Ingrese el valor de la base del triángulo: "))
altura = float(input("Ingrese el valor de la altura del triángulo: "))

area = (base * altura) / 2

print(f"El área del triángulo es: {area:.2f}")

""" 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: valores de base y altura.
Post-condiciones: mensaje que indica el área calculada.
"""
