"""
Análisis del problema:

Se necesita un programa que realice la conversión de segundos a horas, minutos y segundos utilizando el operador módulo (%).

Diseño:

El problema se puede resolver descomponiendo la cantidad de segundos en horas, minutos y segundos.

Especificación del algoritmo:
"""

# Leer la cantidad de segundos ingresada por el usuario
segundos = int(input("Ingrese la cantidad de segundos:"))

# Calcular las horas, minutos y segundos
horas = segundos // 3600
segundos = segundos % 3600
minutos = segundos // 60
segundos = segundos % 60

# Mostrar el resultado
print(f"{horas} horas {minutos} minutos {segundos} segundos")

"""
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: cantidad de segundos ingresada por el usuario.
Post-condiciones: mensaje con la conversión a horas, minutos y segundos.
"""
