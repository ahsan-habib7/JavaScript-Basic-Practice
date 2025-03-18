function welcome(name) {
    return `Hello, ${name}!`;
}
console.log(welcome("Ahsan Habib"));

//2
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));

// Arrow function
const mess = () => "Hello, World!";
console.log(mess());

//Template literal
const hello = "Ahsan";
const arrowFun = () => `Hello, ${hello}`;
console.log(arrowFun());

//Default parameter
const welcome2 = (name = "Habib") => `Hello, ${name}!`;
console.log(welcome2());

//Parameterized
const welcome3 = (name = "Habib") => `Hello, ${name}!`; 
console.log(welcome3("Ahsan"));