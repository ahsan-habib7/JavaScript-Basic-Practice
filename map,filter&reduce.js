const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled Numbers:', doubledNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of Numbers:', sumOfNumbers);

const squaredNumbers = numbers.map(num => num * num);
console.log('Squared Numbers:', squaredNumbers);

const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log('Odd Numbers:', oddNumbers);

//reduce
const number = [1, -2, -3, 4, 5];
const sum = number.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);