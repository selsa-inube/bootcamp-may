function every(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

// Ejemplo
console.log(every([1, 3, 5], (n) => n < 10));
// Verdadero
console.log(every([2, 4, 16], (n) => n < 10));
// Falso
console.log(every([], (n) => n < 10));
// → Falso
