//4.- Realiza un programa que pida al usuario el radio de un círculo y muestre por consola su diámetro, perímetro y área. (En este ejercicio, se utilizan las fórmulas matemáticas para calcular el diámetro, perímetro y área de un círculo a partir de su radio pi = p x r2.).

// Pedimos ingresar números
let radio = parseFloat(prompt("Ingresa el radio del circulo."));

// Realizamos las operaciones aritméticas y las almacenamos en variables
let pi = 3.1416;
let diametro = radio*2;
let perimetro = 2*pi*radio;
let area = pi*(radio*radio);

// Mostramos los resultados por consola
console.log(`El diametro es ${diametro}, el perimetro ${perimetro} y su area: ${area}`);
