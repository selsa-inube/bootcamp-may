let fila = '';
let longitud = 8;
for (let i= 0; i < longitud; i++){
    fila = '';
    for (let j = 0; j < longitud; j++) {
        if(( i + j ) % 2 == 0){
            fila += ' ';
        }else{
            fila += '#';
        }
    }
    console.log(fila);
}