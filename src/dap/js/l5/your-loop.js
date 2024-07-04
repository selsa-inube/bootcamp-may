const loop = (number, from, passed, body) => {
    for (let value = number; from(value); value = passed(value)) {
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);