for (let i = 0; i <= 100; i++){
    let fizzBuzz = '';
    if (i%3 == 0) fizzBuzz += 'Fizz';
    if (i%5 == 0) fizzBuzz += 'Buzz';
    console.log(fizzBuzz || i);
}