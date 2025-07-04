function SuperType() {
    this.colors = ["red", "green", "blue"];
}

function SubType() {
    SuperType.call(this); // Call SuperType constructor to initialize colors // constructor stealing 5 

    // var x = new SuperType(); // This line is not necessary for the prototype chain, but it shows constructor stealing
    // return x;
}

var instance1 = new SubType();

instance1.colors.push("yellow");
console.log(instance1.colors); // Output: ["red", "green", "blue", "yellow"]

var instance2 = new SubType();
console.log(instance2.colors); // Output: ["red", "green", "blue"] -- no prototype chaining, separate instance