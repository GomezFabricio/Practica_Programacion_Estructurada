"""
Análisis del problema:
Se necesita un programa que permita al usuario ingresar información de una dirección
y luego muestre la dirección completa en un formato específico.

Diseño:
El problema se puede dividir en dos partes: Ingresar la información de la dirección
y mostrar el mensaje con la dirección completa.

Especificación del algoritmo:
1. Mostrar un mensaje de bienvenida y solicitar al usuario que ingrese la calle.
2. Leer y almacenar la calle en la variable "calle".
3. Solicitar al usuario que ingrese el número de la dirección.
4. Leer y almacenar el número en la variable "numero".
5. Solicitar al usuario que ingrese el departamento (opcional).
6. Leer y almacenar el departamento en la variable "departamento".
7. Solicitar al usuario que ingrese el código postal.
8. Leer y almacenar el código postal en la variable "codigo_postal".
9. Solicitar al usuario que ingrese la ciudad.
10. Leer y almacenar la ciudad en la variable "ciudad".
11. Solicitar al usuario que ingrese el país.
12. Leer y almacenar el país en la variable "pais".
13. Concatenar los valores de las variables en una cadena formando el mensaje con la dirección completa.
14. Mostrar el mensaje con la dirección completa utilizando la función "print".

Escritura del programa:
"""
calle = input("Ingrese la calle: ")
numero = input("Ingrese el número: ")
departamento = input("Ingrese el departamento (opcional): ")
codigo_postal = input("Ingrese el código postal: ")
ciudad = input("Ingrese la ciudad: ")
pais = input("Ingrese el país: ")

direccion_completa = f"La dirección que ha ingresado es: {calle} {numero} {departamento}, {codigo_postal}, {ciudad}, {pais}"
print(direccion_completa)

"""
Verificación:
Se verifica que el programa muestre correctamente la dirección ingresada por el usuario.

Condiciones:
Pre-condiciones: Información de calle, número, código postal, ciudad y país.
Post-condiciones: Mensaje con la dirección completa.
"""
