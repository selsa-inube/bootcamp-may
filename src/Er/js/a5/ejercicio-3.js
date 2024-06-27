//primer intento
function every(array, test) {
    for (let element of array) {
        if (test(element)){
            return false;    
        }
    }
    return true;
}

console.log(every([1,2,3,4,5,6], n => n < 7));//false

//segundo intento
function every(array, test) {
    for (let element of array) {
        if (!test(element)){
            return false;
        }
    }
    return true;
}

console.log(every([1,2,3,4,5,6], n => n < 7));//true
console.log(every([1,2,3,4,5,6], n => n < 6));//false

//intento con some
function every(array, test) {
  return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));//true
console.log(every([2, 4, 16], n => n < 10));//false