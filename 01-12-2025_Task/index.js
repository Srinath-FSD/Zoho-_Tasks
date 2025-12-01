//Task 1
let numbers = [10, 20, 30];


let copyNumbers = numbers; 
console.log("Original:", numbers);
console.log("Copy:", copyNumbers);

numbers[0] = 99;

console.log("After change:");
console.log("Original:", numbers);
console.log("Copy:", copyNumbers);

//Task 2 

let person = {name: "Srinath",age: 22};

let copyPerson = person;
console.log("Original:", person);
console.log("Copy:", copyPerson);

person.name = "Seenu";

console.log("After change:");
console.log("Original:", person);
console.log("Copy:", copyPerson);

// Task 3 

let students = [{ name: "Sri", age: 20 },{ name: "Seenu", age: 21 }];

let copyStudents = JSON.parse(JSON.stringify(students));

console.log("Original:", students);
console.log("Copy:", copyStudents);


students[0].name = "Srinath";

console.log("After change:");
console.log("Original:", students);
console.log("Copy:", copyStudents);

//Task 4

let people = {
    name: "Sri",
    age: 22,
    address: {
        city: "Hosur",
        pincode: 635109
    }
};

let copyPeople = JSON.parse(JSON.stringify(people));

console.log("Original:", people);
console.log("Copy:", copyPeople);

person.address.city = "Bangalore";

console.log("After change:");
console.log("Original:", people);
console.log("Copy:", copyPeople);

