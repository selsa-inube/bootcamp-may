let min = (num1, num2) => {
    if (num1 < num2) return num1;
    
    return num2;
}
console.log(min(0, 10));
console.log(min(0, -10));