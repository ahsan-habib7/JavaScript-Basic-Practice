console.log('for loop');
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('while loop');
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

console.log('do-while loop');
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// For-in loop (used for iterating over object properties)
console.log('For-in loop');
console.log('index number printing');
const obj = [1, 2, 3, 4, 5];
for (let n in obj) {
    console.log(n);
}

console.log('array element printing');
const obj2 = [10, 20, 30, 40, 50];
for (let n in obj2) {
    console.log(obj2[n]);
}

// For-of loop (used for iterating over iterable objects like arrays)
console.log('For-of loop');
const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}

//forEach loop
console.log('forEach loop');
const ar = [100, 200, 300, 400, 500];
console.log('value printing');
ar.forEach((value) => {
    console.log(value);
});

console.log('index printing');
ar.forEach((value) => {
    console.log(value);
});

console.log('array printing');
ar.forEach((value, index, array) => {
    console.log(array);
});

