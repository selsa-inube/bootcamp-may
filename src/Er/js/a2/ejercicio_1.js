//primer intento
for (let triangulo =0; triangulo<7; triangulo++){
    if (triangulo === 0){
        console.log("#");
    }
    if (triangulo === 1){
        console.log("##");
    }
    if (triangulo === 2){
        console.log("###");
    }
    if (triangulo === 3){
        console.log("####");
    }
    if (triangulo === 4){
        console.log("#####");
    }
    if (triangulo === 5){
        console.log("######");
    }
    if (triangulo === 6){
        console.log("########");
    }
    //console.log(triangulo);
}

//segundo intento
for (let caracter = "#"; caracter.length<8; caracter+="#"){
    console.log(caracter);
}