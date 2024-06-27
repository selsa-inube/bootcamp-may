//primer intento
function loop(start, test, update, body) {
    for (let value = start; test(value); update(value)) {
        body(value);
    }
}
//fallo por que no asigne value = en la función de actualizacion
loop(3, n => n > 0, n => n - 1, console.log);
//3
//2
//1

//segundo intento
function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
//3
//2
//1
