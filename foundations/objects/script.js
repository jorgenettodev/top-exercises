// create an object that represent a person, with name[first name, last name], age, and a method called bio (tells the age) and introduceSelf()

const person = {
    // create the property name as an object.
    name: {first: "Bob", last: "Smith",}, 
    age: 32,
    bio() {
        console.log(`I'm ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi, my name is ${this.name[0]} ${this.name[1]}.`);
    },
};

// create a function that retrieves the property value of a property name.

function logProperty(propertyName) {
    console.log(person[propertyName]);
}


const myDataName = "height";
const myDataValue = "1.75m";

person[myDataName] = myDataValue;

const person1 = {
    name: "Chris Redfield",
    introduceSelf() {
        console.log(`Hi, my name is ${this.name}.`);
    },
};

const person2 = {
    name: "Jill Valentine",
    introduceSelf() {
        console.log(`Hi, i'm ${this.name}.`);
    },
};

// create a function that is a constructor for an object called Person, and has a property "name" and method "introduceSelf";
// function createPerson(name) {
//     // create and obj to store the data
//     const obj = {}

//     // set the property names and method
//     obj.name = name;
//     obj.introduceSelf = function() {
//         console.log(`Hi, my name is ${this.name}.`);
//     };
//     // return the created object.
//     return obj;
// }

// ##### CONSTRUCTOR #####
// - Constructors are functions used to create objects

function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;

    // create a method sayHi
    this.sayHi = function() {
        console.log(`Hi, my name is ${this.name}.`);
    };

    this.introduceSelf = () => {
        console.log(`Hi, my job is ${this.job} and I am ${this.age} years old.`);
    };
};
