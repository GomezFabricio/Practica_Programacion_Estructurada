# Análisis del problema:

# Se necesita un programa que permita al usuario ingresar servicios y montos a pagar por cada uno, y al final muestre la lista de servicios con sus montos y el dinero disponible restante.

# Diseño:

# El problema se puede resolver utilizando un bucle for para iterar tres veces (para los tres servicios), y dentro del bucle solicitar al usuario el nombre y el monto de cada servicio, y actualizar el dinero disponible y la variable de servicios restantes en cada iteración.

# Especificación del algoritmo:

dinero_disponible = float(input("Ingrese la cantidad de dinero disponible: "))
servicios_restantes = 3
servicios = []

for i in range(3):
    print(f"\nLe quedan {servicios_restantes} servicios por ingresar.")
    nombre_servicio = input("Ingrese el nombre del servicio: ")
    
    monto_valido = False
    while not monto_valido:
        try:
            monto_servicio = float(input("Ingrese el monto a pagar por el servicio: "))
            monto_valido = True
        except ValueError:
            print("Por favor, ingrese un monto válido.")
    
    servicios.append((nombre_servicio, monto_servicio))
    
    dinero_disponible -= monto_servicio
    servicios_restantes -= 1
    
    print(f"\nDinero disponible restante: {dinero_disponible:.2f}\n")

print("\nLista de servicios a pagar:")

for nombre, monto in servicios:
    print(f"{nombre}: ${monto:.2f}")

print(f"\nDinero disponible restante: ${dinero_disponible:.2f}")
print(servicios)

# Verificación:

# Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados.

# Condiciones:

# Pre-condiciones: dinero disponible ingresado por el usuario, nombres y montos de servicios ingresados por el usuario.
# Post-condiciones: lista de servicios con sus montos y dinero disponible restante mostrados en pantalla.
