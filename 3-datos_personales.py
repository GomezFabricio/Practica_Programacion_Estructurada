""" 
Análisis del Problema:

Se necesita un programa que solicite al usuario ingresar varios datos personales.
Luego, se debe mostrar un mensaje con la información ingresada.

Diseño de una Solución:

El problema involucra la entrada de varios datos y la generación de un mensaje de salida.
Se pueden usar variables para almacenar cada dato y luego combinarlos en un mensaje.

Especificación de Algoritmos:

1. Solicitar al usuario que ingrese su nombre.
2. Almacenar el nombre en una variable.
3. Solicitar al usuario que ingrese su apellido.
4. Almacenar el apellido en una variable.
5. Solicitar al usuario que ingrese su edad.
6. Almacenar la edad en una variable.
7. Solicitar al usuario que ingrese su nacionalidad.
8. Almacenar la nacionalidad en una variable.
9. Solicitar al usuario que ingrese su número de documento.
10. Almacenar el número de documento en una variable.
11. Generar el mensaje de salida con los datos ingresados.
12. Mostrar el mensaje de salida en pantalla. 

Escritura del programa:
"""

nombre = input("Por favor, ingresa tu nombre: ")
apellido = input("Ahora ingresa tu apellido: ")
edad = input("Ingresa tu edad: ")
nacionalidad = input("Ingresa tu nacionalidad: ")
documento = input("Ingresa tu número de documento: ")

mensaje_salida = f"Nuevo usuario agregado al sistema:\nNombre: {nombre}\nApellido: {apellido}\nEdad: {edad}\nNacionalidad: {nacionalidad}\nDocumento: {documento}"

print(mensaje_salida)

""" 
Verificación:

Los resultados luego de ejecutar el programa con los datos representativos del problema real, son los esperados

Condiciones:

Pre-condiciones: Datos personales
Post-condiciones: Mensaje de salida

"""