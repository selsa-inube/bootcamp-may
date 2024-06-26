//primer intento
function reverseArray(array) {
    let salida = [];
    for (let i = array.length-1; i>=0; i--){
        salida.push(array[i]);
    }
    return salida;
}

console.log(reverseArray(["Hola","Mundo","Cruel"]));


//segundo intento
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArrayInPlace([10,9,8,7,6]));//[6, 7, 8, 9, 10]
console.log(reverseArrayInPlace([10,9,7,6,4,3,8]));//[8, 3, 4, 6, 7, 9, 10]