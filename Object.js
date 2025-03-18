const person = {
    firstName: "Ahsan",
    lastName: "Habib",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());

//Object creation with template literal
const person2 = (firstName = "Ahsan", lastName = "Habib") => `Name: ${firstName} ${lastName}`;
console.log(person2());


const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Black",
};
const modifyCar = {
    year: 2023,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    },
};
const lastUpdate = {...car, ...modifyCar};
console.log(lastUpdate);