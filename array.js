let emptyArray = []; // Empty array

let numberArray = [1, 2, 3, 4, 5]; // Array with numbers

let stringArray = ["apple", "banana", "cherry"]; // Array with strings

let mixedArray = [1, "apple", true, null, { name: "John" }, [1, 2, 3]]; // Mixed array with different data types

// Array of objects
let objectArray = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" }
];

//  2D array
let twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Logging arrays to the console
console.log(emptyArray);
console.log(numberArray);
console.log(stringArray);
console.log(mixedArray);
console.log(objectArray);
console.log(twoDArray);

//spread operator
let a1 = [1, 2, 3, 4, 5];
let a2 = [6, 7, 8, 9, 10];
let a3 = [...a1, ...a2, 20, 50];
console.log(a3);


let [one, two, ...rest] = a1;
console.log("a1: " + a1);