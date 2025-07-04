// // factory pattern : object returned by a function || drawback : duplication of methods
// function createPerson(name,age,job){
//     o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function() {
//         console.log("Name: " + this.name);
//     };
//     // var x = 100;
//     return o;
// }

// var person1 = createPerson("John", 25, "Developer"); // reference to the object returned by createPerson
// console.log(typeof person1); // Output: object

// person1.sayName(); // Output: Name: John
// console.log(person1.name); // Output: John
// console.log(person1.age); // Output: 25
// console.log(person1.job); // Output: Developer


// var person2 = createPerson("Jane", 30, "Designer");

// person1.sayName(); // Output: Name: John
// person2.sayName(); // Output: Name: Jane
// console.log( person1.sayName == person2.sayName); // Output: false
// console.log(person1 instanceof createPerson); // Output: false
// console.log(person2 instanceof createPerson); // Output: false
// console.log(person1.constructor === createPerson); // output: false
// console.log(person1 instanceof Object); // Output: true

// ------------ constructor pattern : object created using 'new' keyword with a constructor function || drawback : duplication of methods

// function createPerson(name,age,job){
    
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function() {
//         console.log("Name: " + this.name);
//     };
//     // var x = 100;
// }

// var person1 = new createPerson("John", 25, "Developer"); // reference to the object returned by createPerson
// console.log(typeof person1); // Output: object
// person1.sayName(); // Output: Name: John
// console.log(person1.name); // Output: John
// console.log(person1.age); // Output: 25
// console.log(person1.job); // Output: Developer

// var person2 = new createPerson("Jane", 30, "Designer");
// person1.sayName(); // Output: Name: John
// person2.sayName(); // Output: Name: Jane
// console.log( "hello" ,person1.sayName == person2.sayName); // Output: false   -- duplication of methods 

// console.log(person1 instanceof createPerson); // Output: true
// console.log(person2 instanceof createPerson); // Output: true
// console.log(person1.constructor === createPerson); // output: true
// console.log(person1 instanceof Object); // Output: true
// console.log(person2 instanceof Object); // Output: true

// ---------- prototype pattern : drawback : methods are shared across all instances, but properties are not shared

// function createPerson(){

// }

// createPerson.prototype.name = "John";
// createPerson.prototype.age = 25;
// createPerson.prototype.job = "Developer";
// createPerson.prototype.sayName = function() {
//     console.log("Name: " + this.name);
// };

// person1 = new createPerson();
// person2 = new createPerson();
// console.log(person1 instanceof createPerson); // Output: true
// console.log(person1.constructor === createPerson); // Output: true
// person1.sayName(); // Output: Name: John
// console.log(person1.sayName == person2.sayName); // Output: true -- no duplication of methods


// ----- ConstructorPrototype Pattern : duplication of properties, but methods are shared across all instances

// function createPerson(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }
// createPerson.prototype.sayName = function() {
//     console.log("Name: " + this.name);
// };

// var person1 = new createPerson("John", 25, "Developer");
// var person2 = new createPerson("Jane", 30, "Designer");

// ------ ES6 class

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }
// }

// console.log(typeof Rectangle); // Output: function
// var rect1 = new Rectangle(10, 20); 

// --- Native prototype Pattern : adding methods to the prototype of built-in objects like String, Array, etc.
// String.prototype.startsWith = function(text) {
//     return this.indexOf(text) === 0;
// }
// var msg = "hello world";
// console.log(msg.startsWith("hello")); // Output: true
// console.log(msg.startsWith("world")); // Output: false 

// 

function Person() {}

// var friend = new Person(); // this will give error because prototype is not defined yet
Person.prototype = { // this overwrites the prototype of Person
    constructor: Person, // reassigning constructor to Person
    name: "John",
    age: 25,
    job: "Developer",
    friends : ["Alice", "Bob"], // we should not keep more than one reference property in prototype
    sayName: function() {
        console.log("Name: " + this.name);
    },
};
var friend = new Person(); // now this will work because prototype is defined
friend.sayName(); 

console.log(friend.constructor === Person); // Output: true

var person1 = new Person();
var person2 = new Person();

person1.friends.push("Charlie");
console.log(person1.friends); // Output: ["Alice", "Bob", "Charlie"]