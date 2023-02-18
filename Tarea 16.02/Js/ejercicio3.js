//3.- Realiza un programa que pida al usuario dos números y muestre por consola el resultado de elevar el primer número a la potencia del segundo número..

// Pedimos ingresar números
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

// Realizamos las operaciones aritméticas y las almacenamos en variables
let elevado = Math.pow(num1, num2);

// Mostramos los resultados por consola
console.log(`El primer número ${num1} elevado al segundo número ${num2} es: ${elevado}`);




