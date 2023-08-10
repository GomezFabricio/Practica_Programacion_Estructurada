"""
Análisis del problema:

Se necesita un programa que calcule la duración total de un vuelo y muestre la duración de cada escala ingresada por el usuario.

Diseño:

El problema consiste en calcular la duración total sumando las duraciones de las escalas ingresadas por el usuario y luego mostrar los resultados en un mensaje.

Especificación del algoritmo:
"""

# Leer los destinos y duraciones de las escalas ingresados por el usuario
escala1 = input("Ingrese el primer destino de escala: ")
duracion1 = float(input(f"Ingrese la duración de la escala en horas para {escala1}: "))

escala2 = input("Ingrese el segundo destino de escala: ")
duracion2 = float(input(f"Ingrese la duración de la escala en horas para {escala2}: "))

escala3 = input("Ingrese el tercer destino de escala: ")
duracion3 = float(input(f"Ingrese la duración de la escala en horas para {escala3}: "))

# Calcular la duración total del vuelo
duracion_total = duracion1 + duracion2 + duracion3

# Mostrar los resultados
print(f"Duración de escalas:")
print(f"{escala1}: {duracion1:.2f} horas")
print(f"{escala2}: {duracion2:.2f} horas")
print(f"{escala3}: {duracion3:.2f} horas")
print(f"Duración total del vuelo: {duracion_total:.2f} horas")

"""
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: destinos y duraciones de escalas.
Post-condiciones: duración total del vuelo y duración de cada escala.
"""
