// Cree una función que dado un arreglo de números de largo 10 permita obtener el mayor número contenido en el arreglo.

// const array2 = [10,20,30,40,50,60,70,80,90,100];

// function resultado(array2){
//     return Math.max.apply(...array2);
// }
// console.log(resultado(...array2));


// function getMaxOfArray(array1) {
//     return Math.max.apply(null, array1);
//   }
  

function getMaxNumber(array2) {
    let max = array2[0];
    for (let i = 1; i < array2.length; i++) {
      if (array2[i] > max) {
        max = array2[i];
      }
    }
    return max;
  }
  
  const array2 = [10,20,30,40,50,60,70,80,90,100];
console.log(getMaxNumber(array2));
