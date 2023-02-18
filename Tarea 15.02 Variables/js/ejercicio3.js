alert("Si deseas calcular el area de un triangulo ingresa los siguientes datos.");
base = prompt('Ingrese el valor de base en cm','');
altura = prompt('Ingrese el valor de triángulo en cm','');

area = (base*altura)/2;
area = parseInt(area);
console.log(area);
document.write("El area del triangulo correspondería a " + area +"cm.");


