""" 
Análisis del problema:

Necesita un programa que solicite al usuario un nombre y apellido.
Se debe mostrar un mensaje de bienvenida personalizado y se debe ingresar un nombre.

Diseño:

El problema se puede dividir en dos partes: ingresar nombres y apellidos y generar un mensaje de bienvenida.

Especificación del algoritmo:

1.Pida al usuario que introduzca un nombre.
2.Almacene el nombre en una variable.
3.Solicite al usuario que ingrese un apellido.
4.Almacene el apellido en una variable.
5.Genere un mensaje de bienvenida concatenando nombres y apellidos.
6.Muestra un mensaje de bienvenida en la pantalla. 

Escritura del programa:

"""

nombre = input("Por favor, ingresa tu nombre: ")
apellido = input("Ahora ingresa tu apellido: ")

mensaje_bienvenida = f"Hola {nombre} {apellido}, bienvenido/a a Ada"

print(mensaje_bienvenida)


""" 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados

Condiciones:

Pre-condiciones: Nombre y apellido
Post-condiciones: Mensaje de bienvenida personalizado

"""