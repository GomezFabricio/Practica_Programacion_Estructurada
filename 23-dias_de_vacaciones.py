""" 
Análisis del problema:

Se necesita un programa que calcule la cantidad de días de vacaciones al año que le corresponden a un empleado en base a la cantidad de años que lleva trabajando en la empresa.

Diseño:

El problema se puede resolver utilizando una estructura condicional para determinar la cantidad de días de vacaciones según la antigüedad del empleado.

Especificación del algoritmo:
"""

# Leer la cantidad de años trabajados ingresada por el usuario
anios_trabajados = int(input("Ingrese la cantidad de años trabajados en la empresa: "))

# Inicializar la cantidad de días de vacaciones
dias_vacaciones = 15

# Calcular los días de vacaciones según la antigüedad
if anios_trabajados > 3:
    dias_extra = anios_trabajados - 3
    dias_vacaciones += dias_extra * 2

# Mostrar el resultado
print(f"Usted tiene derecho a {dias_vacaciones} días de vacaciones al año.")

""" 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

Condiciones:

Pre-condiciones: cantidad de años trabajados ingresada por el usuario.
Post-condiciones: mensaje con la cantidad de días de vacaciones al año.
"""
