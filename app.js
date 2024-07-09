/*
1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let mensaje = "Hola bro, bienvenido";
console.log(mensaje);
alert(mensaje);
*/
let nombre = prompt("Ingresa tu nombre: ");
console.log("Hola " + nombre);

alert("Hola " + nombre + ", jejejm");

let respuesta = prompt(
  "Hola " + nombre + " ¿Cual es el lenguaje de programación que más te gusta?"
);
console.log(respuesta);

let valor1 = prompt("Ingresa un valor: ");
valor1 = parseInt(valor1);
let valor2 = prompt("Ingresa otro valor: ");
valor2 = parseInt(valor2);

let resultado = valor1 + valor2;
console.log("El resultado de la suma es: " + resultado);
alert("El resultado de la suma es: " + resultado);

resultado = valor1 - valor2;
console.log("El resultado de la resta es: " + resultado);
alert("El resultado de la resta es: " + resultado);

let edad = prompt("Ingresa tu edad: ");
edad = parseInt(edad);
if (edad >= 18) {
  console.log("Eres mayor de edad");
  alert("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
  alert("Eres menor de edad");
}

let numero = prompt("Ingresa un numero: ");
numero = parseInt(numero);

if (numero > 0) {
  alert("El numero es positivo");
} else {
  if (numero == 0) {
    alert("El numero es cero");
  } else {
    alert("El numero es negativo");
  }
}

let valor = 1;
valor = parseInt(valor);
while (valor <= 10) {
  console.log(valor);
  valor++;
}

let nota = parseInt(prompt("Ingresa tu nota bro"));
if (nota >= 7) {
  alert("Aprobaste");
} else {
  alert("Reprobaste");
}

//Math libreria, floor acerca al valor entero más cercano, Math.random pone el numero random
//* el valor tope máximo, y el +1 el valor minimo
let num = Math.random();
console.log(num);

num = Math.floor(Math.random() * 10) + 1;
console.log(num);

num = Math.floor(Math.random() * 1000) + 1;
console.log(num);
