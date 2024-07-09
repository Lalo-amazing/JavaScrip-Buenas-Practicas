let mensaje = "Hola bro, bienvenido";
console.log(mensaje);
alert(mensaje);

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
