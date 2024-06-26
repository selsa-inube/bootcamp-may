//primer intento
function deepEqual(obj1, obj2) {
    if (obj1 === obj2){
        return true;
    }
}
console.log(deepEqual("hola","hola"));//true


//segundo intento

function deepEqual(obj1, obj2) {
    if (obj1 === obj2){
        return true;
    }
    if (obj1 == null || typeof obj1 != "object" ||
        obj2 == null || typeof obj2 != "object"){
        return false;
    }
}

console.log(deepEqual("hola","hola1"));//false
console.log(deepEqual("hola2","hola1"));//false
console.log(deepEqual("hola1","hola1"));//true

//tercer intento
function deepEqual(obj1, obj2) {
    
    if (obj1 === obj2){
        return true;
    }
    
    if (obj1 == null || typeof obj1 != "object" ||
        obj2 == null || typeof obj2 != "object"){
        return false;
    }
    
    let keysA = Object.keys(obj1), keysB = Object.keys(obj2);
    
    if (keysA.length != keysB.length){
        return false;        
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(obj1[key], obj2[key])){ 
            return false;
        }
  }
    return true;
}