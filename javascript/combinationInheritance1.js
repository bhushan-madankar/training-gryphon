// combination of constructor stealing and prototype chaining

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "green", "blue"];
}

SuperType.prototype.sayName = function() {
  console.log("Name: " + this.name);
}

function SubType(name, age) {
  SuperType.call(this, name); // Call SuperType constructor to initialize name and colors
  this.age = age;
}

SubType.prototype = new SuperType(); // Set prototype to an instance of SuperType

SubType.prototype.sayAge = function() {
  console.log("Age: " + this.age);
};

var instance1 = new SubType("Alice", 30);
instance1.colors.push("yellow");
console.log(instance1.colors);
instance1.sayName(); // Output: Name: Alice
instance1.sayAge(); // Output: Age: 30

var instance2 = new SubType("Bob", 25);
console.log(instance2.colors); 
instance2.sayName(); // Output: Name: Bob
instance2.sayAge(); // Output: Age: 25