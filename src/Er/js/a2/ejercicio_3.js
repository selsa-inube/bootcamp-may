//primer intento
for (let filas=1; filas<=8 ;filas++){
    for(let columnas = 1; columnas<=8; columnas++){
       if ((filas + columnas)% 2 === 0){
           resultado += " ";
       }else{
           resultado += "#";
       }
    }
    resultado += "\n";
}
console.log(resultado);

//segundo intento
resultado = "";
tamano = 22;
for (let filas=1; filas<=tamano ;filas++){
    for(let columnas = 1; columnas<=tamano; columnas++){
       if ((filas + columnas)% 2 === 0){
           resultado += " ";
       }else{
           resultado += "#";
       }
    }
    resultado += "\n";
}
console.log(resultado);