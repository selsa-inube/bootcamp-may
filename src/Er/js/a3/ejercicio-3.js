//primer intento
function countBs(string) {
    let contador =0;
    for (i = 0; i < string.length; i++){
        if (string[i] == "B"){
            contador += 1;
        }
    }
    return contador;
}

console.log("BOB");
console.log("BBC");
console.log("BcssdBBBBSSSSBBB");


//segundo intento
function countchar(string, char) {
    let contador = 0;
    for (i=0; i < string.length; i++){
        if (string[i] == char){
            contador += 1;            
        }        
    }
    return contador;    
}

function countBs(string) {
    return countchar(string, "C");
}

console.log(countBs('CARLOC'));