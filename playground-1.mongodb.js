db.employees.insertMany([
  {
    name: "Amit",
    age: 28,
    city: "Delhi",
    skills: ["Node.js", "MongoDB", "Express"],
    isActive: true
  },
  {
    name: "Meera",
    age: 35,
    city: "Mumbai",
    skills: ["React", "Node.js"],
    isActive: false
  },
  {
    name: "Zara",
    age: 24,
    city: "Bangalore",
    skills: ["Python", "Flask"],
    isActive: true
  }
]);

db.employees.find({ city: { $eq: "Delhi" } });

// Employees with age > 30
db.employees.find({ age: { $gt: 30 } });

// Active employees with skill "Node.js"
db.employees.find({
  $and: [
    { isActive: true },
    { skills: { $in: ["Node.js"] } }
  ]
});

db.employees.find({
  $and: [
    { isActive: true },
    { skills: { $in: ["Node.js", "Express"] } }
  ]
});

db.employees.find({
    skills: {$size: 2}
});

db.employees.find({
    city: {$exists: false},
});

// Assignment : 
// 1. Find employees with age less than 30
db.employees.find({ age: { $lt: 30 } });

//2. Find employees who are not from Delhi.
db.employees.find({
    city: { $ne: "Delhi"}
});

// 3. Find employees skilled in either React or MongoDB.
db.employees.find({
    skills: { $in: ["React", "MongoDB"] }
});

//4. Find employees who have both Node.js and MongoDB skills.
db.employees.find({
    skills: { $all: ["Node.js", "MongoDB"] }
});

//5. Find all inactive employees.
db.employees.find({
    isActive: false
});

// 6. Find employees with exactly 3 skills.
db.employees.find({
    skills: {$size: 3}
});

// 7. Find employees with age of type integer.
db.employees.find({
    age: {$type: "int"}
});

//8. 8. Find employees whose city is neither Delhi nor Mumbai.
db.employees.find({
    city: { $nin: ["Delhi", "Mumbai"] }
});

// chapter 6 - update and delete operations
db.emp.insertMany([
{ name: "Amit", age: 30, city: "Delhi", salary: 40000 },
{ name: "Neha", age: 27, city: "Mumbai", salary: 50000 },
{ name: "Rahul", age: 35, city: "Delhi", salary: 60000 },
{ name: "Priya", age: 22, city: "Bangalore", salary: 45000 }
]);

db.emp.updateOne(
    { name: "Amit" },
    { $set: { age: 31, salary: 42000 } }
);

db.emp.updateMany(
    { city: "Delhi" },
    { $set: { city: "New Delhi" } }
);