function SuperType() {
    // this.property = true;
    this.colors =["red", "green", "blue"];
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    // this.subProperty = false;

}

SubType.prototype = new SuperType(); // Inherit from SuperType -- prototype chaining

// SubType.prototype.getSubValue = function() {
//     return this.subProperty;
// };
// var instance = new SubType();
// console.log(instance.getSuperValue()); // Output: true
// console.log(instance.getSubValue()); // Output: false


//-- ex 4
var instance1 = new SubType();
instance1.colors.push("yellow");
console.log(instance1.colors); // Output: ["red", "green", "blue", "yellow"]

var instance2 = new SubType();
console.log(instance2.colors); // Output: ["red", "green", "blue", "yellow"] -- prototype chaining, shared property

