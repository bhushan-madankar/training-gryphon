function doSomething() {
    // this will not work because privileged access. (private)
    //var x = 5; // local variable
    // var y = 10; // local variable
    
    // this will work because it is a property of the instance ( protected , privileged access )
    this.x = 10;
    this.y = 20;

    var z = 30; // local variable
}

inst1 = new doSomething();
console.log(inst1.x); // 10
console.log(inst1.y); // 20
console.log(inst1.z); // undefined, because z is a local variable