const every = (array, test) => {
    for (let index = 0; index < array.length; index++) {
        if(!test(array[index]))return false;
    }
    return true;
}
const everyTwo = (array, test) => {
    return !array.some(element => !test(element));
} 
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));