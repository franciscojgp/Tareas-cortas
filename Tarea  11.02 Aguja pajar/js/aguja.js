// ¿Puedes encontrar la aguja en el pajar?
// Escribe una función encontrarAguja() que recibe cómo parámetro un array lleno de muchos elementos. Uno de estos elementos es la "aguja" que tendrás que encontrar con un bucle 'for'.
// Después de encontrar la aguja, tu función debe devolver un mensaje (de tipo 'string') que dice: "La aguja se ha encontrado en la posición x", siendo la x el índice donde se haya localizado la aguja.

const encontrarAguja = ['piedra', 'botella', 'celular', 'cable', 'aguja', 'notebook', 'tazón', 'pc', 'pantalla', 'mouse', 'mesa', 'silla', 'zapatilla'];

for(let i = 0; i < encontrarAguja.length; i++){
    console.log(encontrarAguja[i]);
};
