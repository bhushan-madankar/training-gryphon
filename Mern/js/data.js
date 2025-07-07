let name = "LoneCoder";  // string
let age = 25;            // number
let isActive = true;     // boolean
let score;               // undefined
let empty = null;        // null
let big = 12345678901234567890n; // bigint
let unique = Symbol("id"); // symbol

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Active:", isActive);
console.log("Score:", score);
console.log("Empty:", empty);
console.log("Big Number:", big);
console.log("Unique ID:", unique);
// Array of mixed types
let mixedArray = [name, age, isActive, score, empty, big, unique];
console.log("Mixed Array:", mixedArray); 