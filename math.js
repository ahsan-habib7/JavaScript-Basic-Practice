let a = 10;
let b = 20;
let arr = [1, 2, 3, 4, 5];

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function squareRoot(a) {
    if (a < 0) {
        throw new Error("Square root of negative number is not allowed.");
    }
    return Math.sqrt(a);
}

function power(a, b) {
    return Math.pow(a, b);
}

function absolute(a) {
    return Math.abs(a);
}

function max(arr) {
    return Math.max(...arr);
}

function min(arr) {
    return Math.min(...arr);
}

console.log('Addition:', add(a, b));
console.log('Subtraction:', subtract(a, b));
console.log('Multiplication:', multiply(a, b));
console.log('Division:', divide(a, b));
console.log('Square Root:', squareRoot(a));
console.log('Power:', power(a, b));
console.log('Absolute:', absolute(a));
console.log('Max:', max(arr));
console.log('Min:', min(arr));

//celling
console.log('Ceiling:', Math.ceil(5.1));    
//floor
console.log('Floor:', Math.floor(5.9));
//round
console.log('Round:', Math.round(5.4));
//random
console.log('Random:', Math.random());
//trunc
console.log('Truncate:', Math.trunc(5.9));

