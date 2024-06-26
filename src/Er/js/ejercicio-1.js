//primer intento
function range(start, end) {
    let MyArray = [];
    for(let i = start; i <= end; i+= 1){
        MyArray.push(i);
    }
    return MyArray;
}

console.log(range(1,10));


//segundo intento
function range(start, end) {
    let MyArray = [];
    for(let i = start; i <= end; i+= 1){
        MyArray.push(i);
    }
    return MyArray;
}

function sumar(array) {
    let total = 0;
    for (let value of array){
        total += value;
    }
    return total;
}

console.log(sumar(range(1,5))); //15

//tercer intento
function range(start, end, step) {
    let MyArray = [];
    for(let i = start; i <= end; i+= step){
        MyArray.push(i);
    }
    return MyArray;
}

function sumar(array) {
    let total = 0;
    for (let value of array){
        total += value;
    }
    return total;
}

console.log(range(1,5,2));//1 3 5 
console.log(range(1,20,5));//1,6,11,16

//cuarto intento
function range(start, end, step) {
    let MyArray = [];
    if (step > 0){
        for(let i = start; i <= end; i+= step){
        MyArray.push(i);
        }
    }else{
        for(let i = start; i >= end; i+= step){
        MyArray.push(i);
    }
    }
    
    return MyArray;
}

function sumar(array) {
    let total = 0;
    for (let value of array){
        total += value;
    }
    return total;
}

console.log(range(10,5,-1));//10,9,8,7,6,5