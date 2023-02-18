


function crearArreglo(n) {
    var arr = [1];
    for (var i = 1; i < n; i++) {
      arr.push(arr[i - 1]*2);
    }
    return arr;
  }
  
  console.log(crearArreglo([10]));

  // const valorN = crearArreglo(n)
  // console.log(`El valor de n es de ${valorN}.`);

  


  //Forma 2

