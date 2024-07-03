const reverseArray = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const reverseArrayInPlace =  (arr) => {
    const lengthArr = Math.floor(arr.length / 2);
    for (let i = 0; i < lengthArr; i++) {
        const old = arr[i],
              newLength = arr.length - 1 - i;
        arr[i] = arr[newLength];
        arr[newLength] = old;
    }
    return arr;
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log(myArray);
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);